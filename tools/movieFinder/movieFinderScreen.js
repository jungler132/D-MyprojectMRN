import React, { Component } from 'react';
import allStyles from '../stylesfilm/'
import { View,Text, ScrollView, TouchableOpacity, TextInput, Image} from 'react-native';
import {connect} from 'react-redux'
import {setMovieName , setDataBase , setFavFilm , setMovieNameAsync} from '../actions/actionone'


class ViewStyle extends React.Component {
    noImg = "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg"
    componentDidMount(){
        this.props.setDataBaseAsync(this.props.movieName)
    }
    checkForFavorite(nameMovieM, imageMovieM) {
        const name = this.props.favData.filter(name => name.image === nameMovieM);
        const img = this.props.favData.filter(picture => picture.nameMovie === imageMovieM);
        if ((name.length == 0 && img.length == 0)||(name.length != 0 && img.length == 0)||(name.length == 0 && img.length != 0)) {
          this.props.setFavDataAdd(nameMovieM,imageMovieM);
        }
    }
    render() {
        return (
            <View style={allStyles.styles.mainScreenFilmFlex}> 
                <View style={allStyles.styles.mainScreenTopStyle}>
                <TouchableOpacity onPress={() =>this.props.setDataBaseAsync(this.props.movieName)} style={allStyles.styles.touchOpPTF}>
                    <Text style={allStyles.styles.touchOpPTFTextStyle}>
                    PUSH TO FIND
                    </Text>
                </TouchableOpacity>
                <TextInput onChangeText={text => this.props.nameForSearch(text)} placeholder="Tap here" placeholderTextColor="teal" style={allStyles.styles.textInputtouchOpStyle}/>
                </View >
                <View style={allStyles.styles.searchPanelViewStyle}>
                <ScrollView style={{flex:1}}>
                <Text style={allStyles.styles.searchPanelTextStyle}>
                    SEARCH RESULTS :
                </Text>
                {this.props.dataBase?.map((item,index) => (
                <View key={index} style={allStyles.styles.mappedPieceViewStyle}>
                <Image source={{uri: item?.show?.image?.medium ?? this.noImg}} style={allStyles.styles.imageSourceStyle}/>
                <Text style={allStyles.styles.movieNameTextStyle}>
                    {item.show.name}
                </Text>
                <TouchableOpacity  onPress={() => this.checkForFavorite(item?.show?.image?.medium ?? this.noImg , item.show.name)}style={allStyles.styles.checkForFavButtonStyle}>
                    <Text>
                    add to favorite
                    </Text>
                </TouchableOpacity>
                </View>))}
                </ScrollView>
                </View >
            </View>
        );
    }
}
function mapStateToProps(state) {
    return { 
        movieName : state.reducerMovie.movie,
        dataBase : state.reducerMovie.arrayDataBase,
        favData : state.reducerFav.favData,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setDataBaseAsync:(nameMovieP) => dispatch(setMovieNameAsync(nameMovieP)),
        nameForSearch:(movie) => dispatch(setMovieName(movie)),
        //setDataForSearch:(dataBase) => dispatch(setDataBase(dataBase)),
        setFavDataAdd:(image , nameMovie) => dispatch(setFavFilm(image , nameMovie))
    }
}
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ViewStyle);