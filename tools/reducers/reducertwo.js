export const initialState = {
    favData : []
}
function reducerFav(state = initialState , action) {
    switch (action.type) {
        case "SET_FAV" : 
        return {
            favData : [...state.favData , action.payload]
        }
        case "DEL_FAV_M" :
        return {
            favData : action.payload
        }
        default :
        return state;
    }
}
export default reducerFav