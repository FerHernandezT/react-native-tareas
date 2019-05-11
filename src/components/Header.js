import React, {Component} from 'react';
import { View, Text, Dimensions,} from 'react-native';

import {Header, Right, Left,Body,Button, Icon, Title, Thumbnail} from 'native-base';

export default class CHeader extends Component{
    constructor(props){
        super(props);

        this.state={           
            rigth: (this.props.rigth)? true : false,
            back: (this.props.back)? true : false,
            menu: (this.props.menu)? true : false,
            disableInPress: false,
        }
    };

    /*componentDidMount() {
        if (this.props.ref) {
            this.props.ref(this)
        }
    }*/

    enable(){
        console.log("ACTVAR-BOTON");
        this.setState({disableInPress:false});
    }

    disable(){
        if(this.state.disableInPress) return;
        console.log("click");
        this.state.disableInPress= true;
        this.props.inPress();
    }

    left(){
        if(this.state.menu) return(
            <Button transparent onPress={()=>{this.props.navigation.navigate('DrawerOpen')}} >
                <Icon name='menu' />
            </Button>                
        );
        if(this.state.back) return(
            <Button transparent onPress={()=>{this.props.navigation.goBack()}} >
                <Icon name='md-close' />
            </Button>
        );
        if(this.props.noneLeft) return(null);
        
        return (
            <Button transparent onPress={()=>{this.props.navigation.goBack()}} >
                <Icon name='ios-arrow-back' />
            </Button>
        );
    }

    mid(){
        return(<Title style={{fontSize:15.5}}>{this.props.title}</Title>)     
    }

    right(){
        if(!this.props.right) return(null)
        return (
            <Button transparent style={{marginLeft:0,marginRight:0}} onPress={()=>{
                if(this.props.navigate){
                    this.props.navigation.navigate(this.props.navigate);
                }else {
                    this.props.inPress();;
                }}}>
                {this.props.childrenIcon}
            </Button>
        )
    }


    render() {
        var rwidth = 50; //Siguiente
        //if(this.props.noneRight) rwidth=30;

        return (
            <Header>
                <Left style={{flex:0, width:rwidth}}>
                    {this.left()}
                </Left>
                <Body style={{flex:1, alignItems:'center'}}>
                    {this.mid()}
                </Body>
                <Right style={{flex:0, width:rwidth}}>
                    {this.right()}
                </Right>
            </Header>
        )
    };

}

