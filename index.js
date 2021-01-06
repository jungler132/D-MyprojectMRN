import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore , applyMiddleware} from 'redux'
import {persistStore , persistReducer} from 'redux-persist'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './tools/reducers/index'
import logger from 'redux-logger'
import AsyncStorage from '@react-native-community/async-storage'
import { PersistGate } from 'redux-persist/integration/react'
import {watcherDataAsync} from './tools/sagas/watchers'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist:["reducerMovie"] , 
    whitelist:["reducerFav"]
}
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, reducer)
export const movieStore = createStore(persistedReducer , applyMiddleware(sagaMiddleware , logger))
export const persistorM = persistStore(movieStore)
sagaMiddleware.run(watcherDataAsync)
const myEntryPoint = () => {
    return(
        <Provider store={movieStore}>
            <PersistGate loading={null} persistor={persistorM}>
            <App/>
            </PersistGate>
        </Provider>
    );
};
AppRegistry.registerComponent(appName, () => myEntryPoint);