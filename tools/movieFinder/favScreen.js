import { View,Text, ScrollView , Image} from 'react-native'
import {connect} from 'react-redux'
import allStyles from '../stylesfilm'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import {deleFromFav} from '../actions/actionone'

class FavoriteList extends React.Component {
    render() {
        return(
            <ScrollView style={allStyles.stylesone.scrollViewStyle}>
                <Text style={allStyles.stylesone.titleTextStyle}>
                    Favorite Movie List :
                </Text>
                {this.props.favData?.map((item,index) => (
                <View key={index} style={allStyles.styles.mappedPieceViewStyle}>
                <Image source={{uri: item.image}} style={allStyles.styles.imageSourceStyle}/>
                <Text style={allStyles.styles.movieNameTextStyle}>
                    {item.nameMovie}
                </Text>
                <TouchableOpacity onPress={() => this.props.deleteFav(this.props.favData , item.image , item.nameMovie)} style={allStyles.stylesone.deleteButtonStyle}>
                    <Text>
                        delete from favorite
                    </Text>
                </TouchableOpacity>
                </View>))}
            </ScrollView>
        );
    }
}
function mapStateToProps(state) {
    return { 
        favData : state.reducerFav.favData,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        deleteFav:(favData , img , nameM) => dispatch(deleFromFav(favData , img , nameM))
    }
}
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FavoriteList);