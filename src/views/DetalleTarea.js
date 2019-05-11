import React, { Component } from "react";
import { View, Alert, Modal } from "react-native";
import { Icon, Content, Text, Button, Container, Card, CardItem, Body} from 'native-base';

import Header from '../components/Header';
import Input from '../components/TextInput';

import * as actions from './../actions';
import { connect } from 'react-redux';

class DetalleTarea extends Component {
    constructor(props){
        super(props);
        const { navigate, goBack, state } = this.props.navigation;
        this.state = {
            modalVisible: false,
            tarea: state.params.tarea,
            titulo: state.params.tarea.titulo,
            descripcion: state.params.tarea.descripcion,

        };
    
        this.params = state.params;
    }

    alertUpgradeTarea(){
        if(this.state.tarea.estado !== 'pendiente') return;
        Alert.alert(
            'Completar Tarea',
            'Esta seguro que desea completar la tarea.',
            [
              {
                text: 'No',
                style: 'cancel',
              },
              {text: 'Si', onPress: () => this.upgradeTarea()},
            ],
        );
    }
    alertDeleteTarea(){
        Alert.alert(
            'Eliminar Tarea',
            'Esta seguro que desea eliminar la tarea.',
            [
              {
                text: 'No',
                style: 'cancel',
              },
              {text: 'Si', onPress: () => this.deleteTarea()},
            ],
        );
    }

    updateTarea(){
        let tarea = {
            id: this.state.tarea.id,
            titulo: this.state.titulo,
            descripcion: this.state.descripcion,
            fecha_creacion: this.state.tarea.fecha_creacion,
            estado:'pendiente'
        }
        this.setState({
            tarea: tarea,
            modalVisible: !this.state.modalVisible,
        })
        
        this.props.update_tarea(tarea);
    }
    upgradeTarea(){
        this.setState({tarea: {...this.state.tarea, estado:'completado'}})
        this.props.upgrade_tarea(this.state.tarea.id);
    }
    deleteTarea(){
        this.props.delete_tarea(this.state.tarea.id);
        this.props.navigation.goBack();
    }


    openModal(){
        this.setState({modalVisible: !this.state.modalVisible});
    }

    modal(){
        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
            >
                <View style={[{flex:1}, styles.center, styles.bgTranparent]}>
                    <View style={[styles.padding_8, styles.modal, styles.bgTrasluce, {borderRadius:4}]}>
                        <Text style={[styles.textTitle, styles.textcenter, styles.colorWhite]}>Editar Tarea</Text>

                        <View style={styles.mgv_10}>
                            <Input
                                placeholder='Titulo'
                                text={this.state.titulo}
                                onChangeText={(titulo) => this.state.titulo = titulo}
                                color='#FFF'
                                width={56}
                                margin={5}
                                children={<Icon name='md-copy' style={styles.colorWhite}/>}
                            />
                            <Input
                                placeholder='Descripción'
                                text={this.state.descripcion}
                                onChangeText={(descripcion) => this.state.descripcion = descripcion}
                                color='#FFF'
                                width={56}
                                height={70}
                                margin={5}
                                multiline = {true}
                                numberOfLines = {4}
                            />
                        </View>

                        <View style={[styles.row, styles.between]}>
                            <Button block danger onPress={()=> this.openModal()}>
                                <Text>Regresar</Text>
                            </Button>
                            <Button block success onPress={()=> this.updateTarea()}>
                                <Text>Actualizar</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    render(){
        let tarea = this.state.tarea;
        let cestado = (tarea.estado == 'pendiente')? '#CCC' : '#5cb85c'
        return(
            <Container>
                <Header 
                    title='DETALLE'
                    navigation={this.props.navigation}
                />
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>{tarea.titulo}</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                {tarea.descripcion}
                                </Text>
                            </Body>
                        </CardItem>

                        <View style={[styles.row, styles.between, {paddingLeft:15, paddingRight:5}]}>
                            <Text style={styles.textSmall}>{moment(tarea.fecha_creacion).format('LL')}</Text>

                            <View style={styles.row}>
                                <Button danger transparent onPress={()=> this.alertDeleteTarea()}>
                                    <Icon name='md-trash' />
                                </Button>

                                <Button primary transparent onPress={()=> this.openModal()}>
                                    <Icon name='md-create' />
                                </Button>

                                <Button transparent onPress={()=> this.alertUpgradeTarea()}>
                                    <Icon name="md-checkmark-circle" style={{color:cestado}}/>
                                </Button>
                            </View>
                        </View>
                    </Card>
                </Content>
                {this.modal()}
            </Container>
        )
    }
}


export default connect(null,actions)(DetalleTarea);

