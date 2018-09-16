
import React, {Component} from "react";
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import AlertSelect from "./AlertSelect";

const selectedArr = ["拍照", "图库"];

export default class FlatListBasics extends Component{


    showAlertSelected(){
        this.dialog.show("请选择照片", selectedArr, '#333333', this.callbackSelected);
    }

    // 回调
    callbackSelected(i){
        switch (i){
            case 0: // 拍照
                break;
            case 1: // 图库
                break;
        }
    }

    render(){
        return(
            <View style={mystyle.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={
                        ({item}) => <Text style={mystyle.item}>{item.key}</Text>
                    }
                />

                <TouchableOpacity onPress={() => {this.showAlertSelected();}}>
                    <View>
                        <Text>发射点发射点</Text>
                    </View>
                </TouchableOpacity>

                <AlertSelect ref={(dialog)=>{
                    this.dialog = dialog;
                }} />
            </View>
        )
    }

}

const mystyle = StyleSheet.create({
   container:{
       flex:1,
   } ,
    item:{
       padding:10,
        fontSize:18,
        height:44
    }
});