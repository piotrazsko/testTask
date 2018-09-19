import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../saga';
import { rootReducer } from '../reducers';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, compose(reduxDevtools && reduxDevtools(), applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);
