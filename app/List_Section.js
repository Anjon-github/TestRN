

import React, {Component} from "react";
import {Text, View, StyleSheet, SectionList} from "react-native";

export default class SectionListBasics extends Component{

    render(){
        return(
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title:'D', data:['Devin', 'David', 'Dashan']},
                        {title:'J', data:['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}
                    ]}
                    renderItem={({item}) => this.item(item)}
                    renderSectionHeader={({section}) => this.header(section)}
                    keyExtractor={(item2, index2) => index2}
                />
            </View>
        )
    }

    item(item){
        return <Text style={styles.item}>{item}</Text>
    }

    header(section){
        return <Text style={styles.sectionHeader}>{section.title}</Text>
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    sectionHeader:{
      paddingTop:2,
      paddingLeft:10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 30,
      fontWeight: 'bold',
      backgroundColor: '#ff4455',
    },

    item:{
        padding: 10,
        fontSize: 14,
        height: 44,
        backgroundColor: '#569923',
    }

});