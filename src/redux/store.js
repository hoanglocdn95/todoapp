import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import todos from './reducers/todos.reducers';
import todosSaga from './sagas/todos.sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todosSaga);

export default store;
