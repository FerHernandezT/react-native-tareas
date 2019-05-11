import React, { Component } from "react";
import { Text, View, Button, ImageBackground,Image } from "react-native";
import {Header} from 'native-base';

import * as actions from './../actions';
import { connect } from 'react-redux';
  

class Tareas extends Component {
    constructor(props){
        super(props);
    
    }

    componentDidMount(){
        setTimeout(()=> this.props.navigation.navigate('Tareas'), 2000 );
    }



    render(){
        return(
            <ImageBackground source={ConfiguracionApp.IMAGEN_BACKGROUND.IMAGEN} style={styles.container_image}>
                <Header style={{height:0}} />
                <View style={{flex:1 ,backgroundColor: ConfiguracionApp.IMAGEN_BACKGROUND.COLOR_RGBA}}>

                    <View style={[styles.center, styles.mgv_20]}>
                        <Image source={ConfiguracionApp.LOGO.IMAGEN} style={styles.imgLogo}/>
                    </View>

                    <View style={[styles.center, styles.mgv_20]}>
                        <Text style={styles.textTitle}>{ConfiguracionApp.LOGO.TITLE}</Text>  
                    </View>

                    <View style={[styles.center, styles.padding_15, styles.mgh_20]}>
                        <Text style={[styles.textSmall, styles.textcenter]}>{ConfiguracionApp.LOGO.DESCRIPCION}</Text>
                    </View>
                    
                    <View style={{height:50}}/>
                </View>
            </ImageBackground>
        )
    }
}



export default connect(null,actions)(Tareas);