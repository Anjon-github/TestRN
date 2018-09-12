
import React, {Component} from "react";
import {FlatList, Text, View, StyleSheet} from "react-native";

export default class FlatListBasics extends Component{

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