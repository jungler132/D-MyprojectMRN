import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import ViewStyle from '../movieFinder/movieFinderScreen'
import React, { Component } from 'react';
import FavoriteList from '../movieFinder/favScreen'

const favoriteFilms = createBottomTabNavigator();

export class MovieFinder extends React.Component {
    render() {
        return(
            //<NavigationContainer>
            <favoriteFilms.Navigator tabBarOptions={{inactiveBackgroundColor:"#000000aa", activeBackgroundColor:"teal" , labelStyle:{fontSize:30 , color:"white" , justifyContent:"center" , alignItems:"center"}}}>
            <favoriteFilms.Screen name="Films" component={ViewStyle}/>
            <favoriteFilms.Screen name="Favorite" component={FavoriteList}/> 
            </favoriteFilms.Navigator>
            //</NavigationContainer>
        )
    }
} 