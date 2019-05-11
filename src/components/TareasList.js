import React, { Component } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import { connect } from 'react-redux';

class TareasList extends Component {
    constructor(props){
        super(props);
        this.state={
            refreshing:false,
            load: false,
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

    render(){
        return(
            <FlatList
                data={this.props.tareas}
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
        )
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps", JSON.stringify(state));
    if(state.tareas.length) storeTareas(state.tareas);
    return {
        tareas: state.tareas, //INDEX DE REDUCERS
    }
}

export default connect(mapStateToProps)(TareasList)
