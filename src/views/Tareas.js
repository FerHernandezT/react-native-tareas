import React, { Component } from "react";
import { View, Alert, Modal } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Icon, Content, Button, Form, Item, Label, Text, Container, Title} from 'native-base';

import TareasList from "./../components/TareasList";
import * as actions from './../actions';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Input from '../components/TextInput';
  

class Tareas extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalVisible: false,

            titulo: '',
            descripcion: '',
            
        }
    
    }

    componentDidMount(){
        this.getTareas();
    }


    getTareas(){
        AsyncStorage.getItem("Tareas").then((value) => {
            if (value !== null) {
              //console.log("VALUE", value);
              let lista = JSON.parse(value);

              this.props.load_tareas(lista);
      
            }
            
        }).done();
    }

    addTarea(){
        let titulo = this.state.titulo.trim();
        let descripcion = this.state.descripcion.trim();
        if(!titulo) return Alerts.alertError('Ingrese el titulo de su tarea.');

        this.props.add_tarea({
            id: moment().valueOf(),
            titulo: titulo,
            descripcion: descripcion,
            fecha_creacion: moment().format("YYYY-MM-DD"),
            estado:'pendiente'
        })

        this.setState({
            titulo:'',
            descripcion:'',
        })
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
                        <Text style={[styles.textTitle, styles.textcenter, styles.colorWhite]}>Agregar Tarea</Text>

                        <View style={styles.mgv_10}>
                            <Input
                                placeholder='Titulo'
                                onChangeText={(titulo) => this.state.titulo = titulo}
                                color='#FFF'
                                width={56}
                                margin={5}
                                children={<Icon name='md-copy' style={styles.colorWhite}/>}
                            />
                            <Input
                                placeholder='Descripción'
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
                            <Button block success onPress={()=> this.addTarea()}>
                                <Text>Agregar</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    render(){
        return(
            <Container>
                <Header 
                    title='TAREAS'
                    navigation={this.props.navigation}
                    noneLeft={true}
                    inPress={()=> this.openModal()}
                    right={true}
                    childrenIcon={<Icon name='md-add-circle' style={styles.iconReset}/>}
                />
                <TareasList navigation={this.props.navigation} />
                {this.modal()}
            </Container>
        )
    }
}



export default connect(null,actions)(Tareas);