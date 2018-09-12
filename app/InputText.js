import React from 'react'
import {Button, Text, TouchableHighlight, View} from "react-native";

export default class InputText extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg:''
        }
    }

    render(){
        return(
            <View style={{padding: 10}}>

                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.msg}
                </Text>

                <Button style={{padding: 10, fontSize: 42}} title={'点击'} onPress={this._headFileSize}/>

                <TouchableHighlight
                    underlayColor='rgb(210,260,260)'
                    style={{padding: 10, marginTop: 10, borderRadius: 5,}}
                    onPress={this._headFileSize}>
                    <Text >get请求</Text>
                </TouchableHighlight>

            </View>
        )
    }

     _headFileSize(){
        console.log("_headFileSize");
        fetch("http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg", {
            method: "HEAD",
        }).then((response) => {
            console.log(response.headers.get('content-length'));
        }).catch((err) => {
            console.log(err);
        });
    };
}