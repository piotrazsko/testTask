import { all } from 'redux-saga/effects';

import {watchGetUsersData} from '../containers/Grid/saga'

function* rootSaga() {
  yield all([
      watchGetUsersData()
  ]);
}

export default rootSaga;
