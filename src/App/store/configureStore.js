import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../saga';
import { rootReducer } from '../reducers';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
const sagaMiddleware = createSagaMiddleware();

const composes = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(rootReducer, composes(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga);

export {store}
