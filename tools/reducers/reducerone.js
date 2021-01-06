export const initialState = {
    movie : 'matrix',
    arrayDataBase: [],
}
function reducerMovie(state = initialState , action) {
    switch (action.type) {
        case 'SET_MOVIE' :
            return {
                movie : action.payload
            };
        case 'SET_DATA' : 
            return {
                ...state,
                arrayDataBase : action.payload.arrayDataBase
            }
        default :
        return state;
    }
}
export default reducerMovie;