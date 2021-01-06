import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Text , View , TouchableOpacity} from 'react-native'
import DisplayForCalc from '../displaycom/displayforcalc'
import allStyles from '../stylesforNavig'
import { MovieFinder } from '../tabNavig/tabNavigator';


const toolsStack = createStackNavigator();
const gamesStack = createStackNavigator();

function Tools({navigation}) {
    return(
        <View style={{flex:1}}>
            <TouchableOpacity onPress={() => navigation.navigate("calcScreen")} style={allStyles.styles.touchOpForToolsStyle} >
                <Text style={allStyles.styles.toolsTextStyle}>
                    Calculator
                </Text>
            </TouchableOpacity>
        </View>
    );
}
 export class ToolsStackNavigator extends React.Component {
    render() {
        return(
                    <toolsStack.Navigator>
                    <toolsStack.Screen name="tools" component={Tools}/>
                    <toolsStack.Screen  name="calcScreen" component={DisplayForCalc}/>
                    </toolsStack.Navigator>           
        )
    }
}
function Games({navigation}) {
    return(
        <View style={{flex:1}}>
            <TouchableOpacity onPress={() => navigation.navigate("filmGame")}  style={allStyles.styles.touchOpForGamesStyle}>
                <Text style={allStyles.styles.gamesTextStyle}> 
                    Movie Finder
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export class GamesStackNavigator extends React.Component {
    render() {
        return(
            <gamesStack.Navigator>
            <gamesStack.Screen name="games" component={Games}/>
            <gamesStack.Screen name="filmGame" component={MovieFinder}/>
            </gamesStack.Navigator>
        )
    }
}
