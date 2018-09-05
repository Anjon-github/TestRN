import React, { Component } from 'react';
import {
    ActivityIndicator,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Network extends Component {

    constructor(props){
        super(props);
        this.state ={isLoading: true}
    }

    componentDidMount(){
        return fetch('http://api.nangedai.com/v1/login/vericode?timestamp=1536160510&sign=25464ff3222ff5b4af6632670d61dd33&token=&uuid=618d9bef5ebf4ec934c3c823b5043da7')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data,
                }, function () {

                });
            })
            .catch((error) => {
                console.error(error)
            });
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={{flex:1, padding:20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return(
            <View style={{flex:1, padding:20}}>
                <Text>
                    {JSON.stringify(this.state.dataSource)}
                </Text>
            </View>
        )
    }
}