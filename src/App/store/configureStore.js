import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootSaga from '../saga';
import { rootReducer } from '../reducers';
import config from '../../config'

const sagaMiddleware = createSagaMiddleware();

const composes = config.isActiveDevTool ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:compose;
const store = createStore(rootReducer, composes(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export {store , persistor}
