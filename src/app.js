/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './reducers'


import { createStackNavigator, createAppContainer } from 'react-navigation';

import { StyleProvider } from 'native-base';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material';


import Main from "./views/Main";
import Tareas from "./views/Tareas";
import DetalleTarea from "./views/DetalleTarea";

ConfiguracionApp = require ('./../configuracion/ConfiguracionApp');
styles = require('./../configuracion/Styles');
Alerts = require('./../configuracion/Alert');

BotonNativo = (Platform.OS === 'ios') ? TouchableHighlight : TouchableNativeFeedback;
moment = require('moment');
require("moment/min/locales.min");
moment.locale('es');

storeTareas = (lista)=>{
  AsyncStorage.setItem("Tareas", JSON.stringify(lista));
}



const Navigations = createStackNavigator(
  {
    Main: Main,
    Tareas: Tareas,
    DetalleTarea: DetalleTarea,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
    cardStyle: {//style for an individual card in stack
      backgroundColor: ConfiguracionApp.VIEW_COLOR,
    },  
  }
);

const AppView = createAppContainer(Navigations);


type Props = {};
export default class App extends Component<Props> {

  componentDidMount(){
    
  }

  render() {
    return (
      <StyleProvider  style={getTheme(material)}>
        <Provider store={createStore(Reducers)}>
          <AppView />
        </Provider>
      </StyleProvider>
    );
  }
}
