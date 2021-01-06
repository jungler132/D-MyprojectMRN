import { call , put } from "redux-saga/effects";

import { setDataBase } from '../actions/actionone'


export function setDataAsync(movie) {
    console.log("movieObject", movie)
    console.log("movieName", movie.payload)
  const url = `http://api.tvmaze.com/search/shows?q=${movie.payload}`
    return async() => {
        try{
            return fetch(url)
          .then(response => response.json())
        }
        catch(e) {
            console.log(e)
        }
    }
}
export function* workerSetData(movie) {
    const dataAsync = yield call(setDataAsync(movie))
    yield put(setDataBase(dataAsync))
}
