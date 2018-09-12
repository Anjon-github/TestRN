import React, { Component } from 'react';
import {
    ActivityIndicator, Button, Image,
    Platform, ScrollView,
    StyleSheet,
    Text,
    View,Alert
} from 'react-native';
// import * as Alert from "react-native/Libraries/Alert/Alert";
// import * as Alert from "react-native";

export default class Network extends Component {

    constructor(props){
        super(props);
        this.state ={isLoading: true}
    }

    componentDidMount(){
        this.timer = setTimeout(() =>{
            return fetch('http://api.nangedai.com/v1/login/vericode?timestamp=1536160510&sign=25464ff3222ff5b4af6632670d61dd33&token=&uuid=618d9bef5ebf4ec934c3c823b5043da7')
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("responseJson" + JSON.stringify(responseJson));
                    this.setState({
                        isLoading: false,
                        dataSource: responseJson.data,
                    }, function () {

                    });
                })
                .catch((error) => {
                    console.error(error)
                });
        }, 500);

    }

    componentWillUnmount(){
        this.timer && clearTimeout(this.timer)
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={{flex:1, padding:20}}>
                    <ActivityIndicator size="large" color="#0000ff"/>
                </View>
            )
        }
        return(
            <View>
                <Button
                    onPress={() => {
                        Alert.alert("你点击了按钮");
                    }}
                    title={'点我'}/>
            </View>
        )
    }
}