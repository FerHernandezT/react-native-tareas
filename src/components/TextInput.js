import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions
} from 'react-native';

const window = Dimensions.get('window');

export default class Input extends Component{
    constructor(props){
    super(props);

    this.state={
        text: (this.props.text)? this.props.text : null,
        width: (this.props.width)? this.props.width : 30,
        color: (this.props.color)? this.props.color : '#777',
        height:(this.props.height)? this.props.height : 40,
        margin:(this.props.margin)? this.props.margin : 10,
    }
    
    
    //console.log("PROPS",this.props);
    //console.log("width",this.props.width);
  };

    componentWillReceiveProps(nextProps){
        this.setState({
            text : nextProps.text
        });
    }
    
    onChangeText = text => {
        this.setState({text:text});
        this.props.onChangeText(text)
    };


    onFocus = (event) => {
        if(this.props.onFocus){
            this.props.onFocus(this.refs.input);
        }
    }




    onLayout = (event) => {
        if (this.props.onLayout) {
            this.props.onLayout(event);
        }
    };



    render() {

        if(this.props.children){
            return(
                <View style={{
                    flex:0,
                    flexDirection:'row',
                    alignItems:'center',
                    width: window.width - this.state.width,
                    borderWidth: 1,
                    borderColor:'#FFF',
                    backgroundColor:this.props.backgroundColor,
                    borderRadius:4,
                    marginTop: (this.state.margin == 0)? 0 : 5,
                    marginBottom: this.state.margin,
                }}>
                    <View style={{marginHorizontal:3}}>
                        {this.props.children}
                    </View>
                    
                    <TextInput
                            style={{
                                width: window.width - this.state.width - 40,
                                height: this.state.height,
                                color:this.state.color,
                                }}
                            underlineColorAndroid='rgba(0, 0, 0, 0)'
                            //{...this.props}
                            secureTextEntry={this.props.secureTextEntry}
                            keyboardType={this.props.keyboardType}
                            placeholder={this.props.placeholder}
                            placeholderTextColor={this.state.color}
                            onChangeText={this.onChangeText}
                            onSubmitEditing={this.props.onSubmitEditing}
                            returnKeyType={this.props.returnKeyType}
                            underlineColorAndroid='rgba(0, 0, 0, 0)'
                            onLayout={this.onLayout}
                            value={this.state.text}
                            editable={this.props.editable}
                            ref={this.props.ref}
                            />
                </View>
            );
        }
        
        return (
            <View style={{
                flex:0,
                width: window.width - this.state.width,
                borderWidth: 1,
                backgroundColor:this.props.backgroundColor,
                borderColor:'#FFF',
                borderRadius:4,
                marginTop: (this.state.margin == 0)? 0 : 5,
                marginBottom: this.state.margin,
            }}>
                <TextInput
                        style={{
                            width: window.width - this.state.width - 10,
                            height: this.state.height,
                            color:this.state.color,
                            }}
                        underlineColorAndroid='rgba(0, 0, 0, 0)'
                        //{...this.props}
                        secureTextEntry={this.props.secureTextEntry}
                        keyboardType={this.props.keyboardType}
                        placeholder={this.props.placeholder}
                        placeholderTextColor={this.state.color}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitEditing}
                        onLayout={this.onLayout}
                        value={this.state.text}
                        multiline = {this.props.multiline}
                        maxLength = {this.props.maxLength}
                        numberOfLines = {this.props.numberOfLines}
                        editable={this.props.editable}
                        ref="input"
                        />
            </View>
        )
    };

}