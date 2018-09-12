


import {
    View, Alert, Button, StyleSheet, TouchableHighlight, Text, TouchableOpacity,
    TouchableNativeFeedback, Platform, TouchableWithoutFeedback,
} from "react-native";
import * as React from "react";

export default class Touch extends React.Component{

    _onPressButton(){
        Alert.alert("You tapped the button!")
    }

    _onLongPressButton(){
        Alert.alert("You long-pressed the button!")
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton}
                        title={"Press Me"}
                        color={"#841584"}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                        color={"#841584"}
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="This looks great!"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="OK!"
                        color={"#841584"}
                    />
                </View>

                <TouchableHighlight
                    onPress={this._onPressButton}
                    underlayColor={"#841584"}
                    onLongPress={this._onLongPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHignlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity
                    onPress={this._onPressButton}
                    onLongPress={this._onLongPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    onLongPress={this._onLongPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground():''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableWithoutFeedback
                    onPress={this._onPressButton}
                    >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    buttonContainer:{
        margin:20
    },
    alternativeLayoutButtonContainer:{
        margin:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button:{
        marginBottom:30,
        width:260,
        alignItems:'center',
        backgroundColor:'#2196f3'
    },
    buttonText:{
      padding:20,
      color:'white'
    },
});