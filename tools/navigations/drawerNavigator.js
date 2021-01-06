import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {Component} from 'react';
//import {сюда я должен написать имена скринов через запятую чтобы импортнуть} from '../screens/appScreens'
import {NavigationContainer} from '@react-navigation/native'
import {WebView} from 'react-native-webview'
import {ToolsStackNavigator} from './stackNavigator'
import {GamesStackNavigator} from './stackNavigator'
import {AboutMe} from './tapNavigator'
import welcomeScreen from '../screens/welcomeScreen'
import allStyles from '../stylesforNavig'

class newsWebView extends React.Component {
    render() {
        return(
            <WebView source={{
                uri: 'https://www.cybersport.ru/'
            }}
            />
        )
    }
}
// function enterScreen({navigation}) {
//     return(
//         <welcomeScreen/>
//     )
// }
const MainMenu = createDrawerNavigator();
export class MainMenuFunc extends React.Component{
    render(){
        return(
    <NavigationContainer>
    <MainMenu.Navigator initialRouteName="WELCOME" component={welcomeScreen} drawerStyle={allStyles.styles.drawerStyle} drawerContentOptions={{inactiveTintColor:"teal" , itemStyle:{marginVertical:15}}}> 
    <MainMenu.Screen name="Новости киберспорта." component ={newsWebView} />
    <MainMenu.Screen name="Развлечения." component ={GamesStackNavigator}/>
    <MainMenu.Screen name="Инструменты." component ={ToolsStackNavigator}/>
    <MainMenu.Screen name="Обо мне." component ={AboutMe}/>
    </MainMenu.Navigator>
    </NavigationContainer>
    )
    }
       
            
          
        
    
};
