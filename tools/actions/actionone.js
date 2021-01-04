export const setMovieName = (movie) => ({
    type:'SET_MOVIE' ,
    payload : movie
});
export const setDataBase = (dataMovie) => ({
    type: 'SET_DATA' ,
    payload : {
        arrayDataBase : dataMovie
    }
});
export const setFavFilm = (img , nameM) => ({
    type: 'SET_FAV',
    payload : {
        image : img,
        nameMovie : nameM
    }
});
export const deleFromFav = (favoriteData , favoriteImage , favoriteName) => ({
    type: "DEL_FAV_M",
    payload: favoriteData.filter((filteredImage , filteredName) => (filteredImage.image != favoriteImage && filteredName.nameMovie != favoriteName))
})