import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import allStyles from '../stylesforNavig'

const aboutMeTap = createBottomTabNavigator();

function profilePage() {
    return(
        <View style={allStyles.styles.tapMenuPagesStyle}>
            <Text>
                THIS IS PROFILE PAGE 
            </Text>
        </View>
    )
}
function settingPage() {
    return(
        <View style={allStyles.styles.tapMenuPagesStyle}>
            <Text>
                THIS IS SETIING PAGE
            </Text>
        </View>
    )
}
export class AboutMe extends React.Component {
    render() {
        return(
            <aboutMeTap.Navigator tabBarOptions={{inactiveBackgroundColor:"#000000aa", activeBackgroundColor:"teal" , labelStyle:{fontSize:30 , color:"white" , justifyContent:"center" , alignItems:"center"}}}>
            <aboutMeTap.Screen name="profile" component={profilePage}/>
            <aboutMeTap.Screen name="settings" component={settingPage}/>
            </aboutMeTap.Navigator>
        )
    }
}