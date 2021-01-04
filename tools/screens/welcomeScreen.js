import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class welcomeScreen extends React.Component{
    render() {
        return (
            <View style={{flex:1 , backgroundColor:"teal" , alignItems:"center" , justifyContent:"center"}}>
                <Text style={{color:"black" , fontSize:50}}>
                    WELCOME TO MY APP @dreame132
                </Text>
            </View>
        );
}
}