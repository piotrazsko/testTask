import { delay } from 'redux-saga'
import { put, takeEvery,call } from 'redux-saga/effects'

import  {getUsersDateSuccess} from  '../actions'
import {ACTION_GET_USER_RESPONSE} from  '../constants'


export function* getUserData() {
    console.log('test');
  yield call(delay,1000)
  yield put(getUsersDateSuccess('data-1000'))
}

export function* watchGetUsersData() {
  yield takeEvery(ACTION_GET_USER_RESPONSE, getUserData)
}
