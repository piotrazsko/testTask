import { call, put, takeEvery, select } from 'redux-saga/effects';
import _ from 'lodash';

import ApiMethods from '../utils/api';
import ApiService from '../utils/services/API';

function* callAPI(action) {
    console.log(action);
  let data = ApiMethods[_.camelCase(action.type)](action.payload);

  try {
    const response = yield call(ApiService, { data });
    const newType = action.type.replace('_REQUEST', '_SUCCESS');

    yield put({
      response,
      type: newType,
      payload: action.payload,
    });
  } catch (e) {
    const errorModel = {
      type: action.type.replace('_REQUEST', '_FAILED'),
      payload: action.payload,
      message: e.statusText,
      status: e.status,
      response: e.response,
    };

    yield put(errorModel);
  }
}

export default function* watchRequest() {
  yield takeEvery((action) => /^.*_REQUEST$/.test(action.type), callAPI);
}
