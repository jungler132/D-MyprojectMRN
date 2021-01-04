import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainScreen: {
        flex:0.3,
        justifyContent:"flex-end",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#e1e6fc"
    },
    mainScreenText: {
        fontSize:35,
        color:"#58595d"
    }, //ok
    //////////////////////////////////DisplayStyles
    buttonScreen:{
        flex:0.7,
        backgroundColor:"#c1cefd"
    },
    buttonView:{
        flex:0.15,
        backgroundColor:"#c1cefd",
        flexDirection:"row"
    },
    touchOpButton:{
        flex:0.25,
        backgroundColor:"#c1cefd",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonInsideText:{
        fontSize:50,
        color:"teal"
    }, //ok
    ///////////////////////////////////ButtonStyles
    numberButtons:{
        flexDirection:"row",
        flex:0.9,
        backgroundColor:"#11CBD7"
    },
    numberButtonStyle:{
        flex:0.8, backgroundColor:"teal",
        flexDirection:"row",
        flexWrap:"wrap"
    },
    numberButtonStyleOne:{
        backgroundColor:"#94a9fc",
        justifyContent: 'center',
        alignItems: 'center',
        width: "33.3%",
        height: "33.3%"
    },
    numberButtonTextStyle:{
        fontSize:50,
        color:"#c1cefd"
    }, //ok
    /////////////////////////////////////////NumbersStyles
    operationButtonViewStyle:{
        flex:0.2,
        backgroundColor:"#FA4659"
    },
    operationsButtonStyleOne:{
        flex:0.25,backgroundColor:"#c1cefd",
        justifyContent: 'center',
        alignItems: 'center'
    },
    zeroButtonStyle:{
        flex:0.2,backgroundColor:"teal",
        justifyContent:"center",
        alignItems:"center"
    },
    operationButtonTextStyle:{
        fontSize:50,
        color:"teal"
    },
    ////////////////////////////////////////////styles for filmproj
    
})
export default styles