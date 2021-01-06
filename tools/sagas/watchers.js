import { workerSetData } from '../sagas/workers'
import { SET_MOVIE_ASYNC } from '../actions/actionone'
import { takeEvery } from 'redux-saga/effects'

export function* watcherDataAsync() {
    yield takeEvery(SET_MOVIE_ASYNC , workerSetData)
}