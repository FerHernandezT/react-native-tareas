import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import * as actions from './../actions';
import { connect } from 'react-redux';
  

class Tareas extends Component {
    constructor(props){
        super(props);
    
    }

    componentDidMount(){
        this.getTareas();
    }


    getTareas(){
        setTimeout(()=> this.props.navigation.navigate('Tareas'), 2000 );
        //this.props.load_tareas(data.data)
    }


    render(){
        return(
            <View>
                <Text>Cargando datos...</Text>
            </View>
        )
    }
}



export default connect(null,actions)(Tareas);