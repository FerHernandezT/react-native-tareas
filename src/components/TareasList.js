import React, { Component } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { Icon, Button, Form, Item, Label, Text, Container, Title} from 'native-base';
import { connect } from 'react-redux';

class TareasList extends Component {
    constructor(props){
        super(props);
        this.state={
            refreshing:false,
            load: false,
            fecha: false,
            estado: false,
        }
    };


    renderRow({item}){
        return(
            <BotonNativo onPress={()=>  this.props.navigation.navigate('DetalleTarea', {tarea:item}) } underlayColor='rgba(0, 0, 0, 0)'>
                <View style={{padding:15, marginVertical:7, backgroundColor:'#F8F8F8'}}>
                    <Text style={{fontWeight:'600', fontSize:19}}>{item.titulo}</Text>
                    <View style={[styles.row, styles.between]}>
                        <Text style={styles.textSmall}>{moment(item.fecha_creacion).format('LL')}</Text>
                        <Text style={styles.textSmall}>{item.estado}</Text>
                    </View>
                </View>
            </BotonNativo>
        )
    }

    _onRefresh() {
        this.setState({refreshing: true});
        //API LOAD DATA
    }

    onFilter(key){
        this.setState({
            fecha: (key == 'fecha')? true : false,
            estado: (key == 'estado')? true : false,
        })
    }

    sortData(array){
        array = JSON.parse(JSON.stringify(array));
        if(!this.state.fecha && !this.state.estado) return array;
        if(this.state.fecha){
            array.sort(function (a, b) {
                
                if (parseInt(a.id) < parseInt(b.id)) return 1;
                if (parseInt(a.id) > parseInt(b.id)) return -1;
                return 0;
            });
        }
        if(this.state.estado){
            array.sort(function (a, b) {
                if (a.estado > b.estado) return 1;
                if (a.estado < b.estado) return -1;
                return 0;
            });
        }
        
        return array;

    }

    render(){
        let data = this.sortData(this.props.tareas);


        return(
            <View style={{marginTop: 5, flex:1}}>
                <View style={[styles.row, styles.between]}>
                    <View style={{flex:1}}>
                        <Button iconRight full light={(this.state.fecha)? false : true} onPress={()=> this.onFilter('fecha')}>
                            <Text>Fecha</Text>
                            <Icon name='md-arrow-dropdown' style={{fontSize:15}} />
                        </Button>
                    </View>
                    <View style={{flex:1}}>
                        <Button iconRight full light={(this.state.estado)? false : true} onPress={()=> this.onFilter('estado')}>
                            <Text>Completado</Text>
                            <Icon name='md-arrow-dropdown' style={{fontSize:15}} />
                        </Button>
                    </View>
                </View>
                <FlatList
                    data={data}
                    renderItem={this.renderRow.bind(this)}
                    keyExtractor={(item, index) => index.toString()}
                    /*refreshing={true}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }*/
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    //console.log("mapStateToProps", JSON.stringify(state));
    if(state.tareas.length) storeTareas(state.tareas);
    return {
        tareas: state.tareas, //INDEX DE REDUCERS
    }
}

export default connect(mapStateToProps)(TareasList)
