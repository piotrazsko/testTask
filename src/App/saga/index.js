import { all } from 'redux-saga/effects';

// import {watchGetUsersData} from '../containers/Grid/saga';
import watchRequest from './watchRequest';

function* rootSaga() {
  yield all([
      watchRequest(),
      // watchGetUsersData()
  ]);
}

export default rootSaga;
