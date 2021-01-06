import reducerFav from './reducertwo'
import reducerMovie from './reducerone'
import {combineReducers} from 'redux'

const reducer = combineReducers({reducerFav , reducerMovie})

export default reducer