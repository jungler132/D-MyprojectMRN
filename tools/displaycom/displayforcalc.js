import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import allStyles from '../styleforproj'
export default class DisplayForCalc extends React.Component{
    constructor(props){
    super(props);
    this.state = {result : ""}
    }
    isDotPressed = false
    isOperButtonPressable = false
    isEqualPressed = false
    answerResult = ""
    answerNumber = 0
    arrayNumber = [7,8,9,4,5,6,1,2,3]
    functionPress = (button) => {
    this.functionReloadView()
    if(this.state.result == "0"){
        this.setState({result : button})
    }
    else{
        this.setState((prevState) => ({result : prevState.result + `${button}`}))
        this.isOperButtonPressable = false
        this.isEqualPressed = false
    }
    }
    functionReloadView = () => {
        if(this.state.result === "ERROR DIVIDE BY 0"){
            this.functionClear()
        }
    }
    functionPlusMinus = () => {
        if(this.state.result == 0){
            this.setState((prevState) => ({result : prevState.result}))
        }
        else{
            this.setState((prevState) => ({result :0 - eval(prevState.result).toString()}))
        }
    }
    funcOperations= (oper) => {
        this.functionReloadView()
    if(this.isOperButtonPressable === false){
        this.setState((prevState) => ({result : prevState.result + oper}))
        this.isDotPressed = false
        this.isOperButtonPressable = true
        this.isEqualPressed = true
        }
        else{
            this.setState((prevState) => ({result : prevState.result}))
        }
    }
    calculatedResult=  () => {
        if(eval(this.state.result).toString() == "Infinity" || eval(this.state.result).toString() == "-Infinity"){
            this.setState({result : "ERROR DIVIDE BY 0"})
        }
        else if(this.state.result == ""){
            this.setState({result : ""})
        }
        else if(this.isOperChange == false){
        }
        else{
            this.answerResult = eval(this.state.result).toString()
            console.log(this.answerResult)
            this.setState({result : this.answerResult})
        }
        this.isDotPressed = false
    }
    functionClear=() => {
        this.setState({result : ""})
        this.isDotPressed = false
    }
    functionDeleteOneChar=() => {
        this.functionReloadView()
        this.setState({result: this.state.result.toString().substring(0,this.state.result.length-1)})
        this.isOperButtonPressable = false
        this.isDotPressed = false
    }
    dotButtonFunc=(dot) => {
        this.functionReloadView()
        if(this.isDotPressed){
            this.setState((prevState) => ({result : prevState.result}))
        }
        else{
            if(this.state.result.length === 0){
            this.setState((prevState) => ({result : prevState.result + "0"+ dot}))
            this.isDotPressed = true
            }
            else{
            this.setState((prevState) => ({result : prevState.result + dot}))
            this.isDotPressed = true
            }
        }
    } 
    render() {
        console.log(this.state.result)
        return (
            <View style={{flex:1}}>
                <View style={allStyles.styles.mainScreen}>
                    <Text style={allStyles.styles.mainScreenText}>
                        {this.state.result}
                   </Text>
                </View>
                <View style={allStyles.styles.buttonScreen}>
                    <View style={allStyles.styles.buttonView}>
                        <TouchableOpacity onPress={() => this.calculatedResult("", this.answerResult)} style={allStyles.styles.touchOpButton}>
                            <Text style={allStyles.styles.buttonInsideText}>
                                =
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.functionPlusMinus()} style={allStyles.styles.touchOpButton}>
                            <Text style={allStyles.styles.buttonInsideText}>
                                +-
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.functionClear("", this.answerResult)} style={allStyles.styles.touchOpButton}>
                            <Text style={allStyles.styles.buttonInsideText}>
                                C
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.dotButtonFunc(".")} style={allStyles.styles.touchOpButton}>
                            <Text style={allStyles.styles.buttonInsideText}>
                                .
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.functionDeleteOneChar("", this.answerResult)} style={allStyles.styles.touchOpButton}>
                            <Text style={allStyles.styles.buttonInsideText}>
                                Del
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={allStyles.styles.numberButtons}>
                        <View style={allStyles.styles.numberButtonStyle}>
                            {this.arrayNumber.map((item , index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => this.functionPress(item , this.answerNumber)} style={allStyles.styles.numberButtonStyleOne}>
                                        <Text style={allStyles.styles.numberButtonTextStyle}>
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                        <View style={allStyles.styles.operationButtonViewStyle}>
                        <TouchableOpacity onPress={() => this.funcOperations("+" , this.answerResult)} style={allStyles.styles.operationsButtonStyleOne}>
                            <Text style={allStyles.styles.operationButtonTextStyle}>
                                +
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.funcOperations("-" , this.answerResult)} style={allStyles.styles.operationsButtonStyleOne}>
                            <Text style={allStyles.styles.operationButtonTextStyle}>
                                -
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.funcOperations("*" , this.answerResult)} style={allStyles.styles.operationsButtonStyleOne}>
                            <Text style={allStyles.styles.operationButtonTextStyle}>
                                *
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.funcOperations("/" , this.answerResult)} style={allStyles.styles.operationsButtonStyleOne}>
                            <Text style={allStyles.styles.operationButtonTextStyle}>
                                /
                            </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.functionPress("0", this.answerResult)} style={allStyles.styles.zeroButtonStyle}>
                    <Text style={allStyles.styles.numberButtonTextStyle}>
                        0
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}