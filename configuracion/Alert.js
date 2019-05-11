import {Alert} from 'react-native';


module.exports = {
    alertError: function(mensaje){
        Alert.alert(
            'Opps...',
            mensaje,
            [
              {text: 'OK'},
            ]
          )
    },
    
}