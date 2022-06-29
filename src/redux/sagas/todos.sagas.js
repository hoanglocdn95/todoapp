import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import clientServer from '../../server/clientServer';
import { TODO } from '../actionCreator';

function* reqTodosAll(action) {
  try {
    const res = yield call(() =>
      clientServer.get(
        `todoItems${action.payload ? `?status=${action.payload.status}` : ''}`
      )
    );
    yield put({ type: TODO.GET_TODO_SUCCESS, payload: res.data });
  } catch (e) {
    yield put({ type: TODO.GET_TODO_FAILED, payload: e.message });
  }
}

function* reqDetailTask(action) {
  try {
    const res = yield call(() =>
      clientServer.get(`todoItems/${action.payload.idTask}`)
    );
    yield put({ type: TODO.DETAIL_TASK_SUCCESS, payload: res.data });
  } catch (e) {
    yield put({ type: TODO.DETAIL_TASK_FAILED, payload: e.message });
  }
}

function* reqAddNew(action) {
  try {
    yield call(() => clientServer.post('todoItems', action.payload));
    yield put({ type: TODO.ADD_NEW_SUCCESS });
  } catch (e) {
    yield put({ type: TODO.ADD_NEW_FAILED, payload: e.message });
  }
}

function* reqEditTask(action) {
  try {
    yield call(() =>
      clientServer.patch(`todoItems/${action.payload.id}`, action.payload)
    );
    yield put({ type: TODO.EDIT_TASK_SUCCESS });
  } catch (e) {
    yield put({ type: TODO.EDIT_TASK_FAILED, payload: e.message });
  }
}

function* reqDeleteTask(action) {
  try {
    yield call(() => clientServer.delete(`todoItems/${action.payload.id}`));
    yield put({ type: TODO.DELETE_TASK_SUCCESS });
  } catch (e) {
    yield put({ type: TODO.DELETE_TASK_FAILED, payload: e.message });
  }
}

function* mySaga() {
  yield all([
    takeLatest(TODO.GET_TODO, reqTodosAll),
    takeLatest(TODO.DETAIL_TASK, reqDetailTask),
    takeEvery(TODO.ADD_NEW, reqAddNew),
    takeEvery(TODO.EDIT_TASK, reqEditTask),
    takeEvery(TODO.DELETE_TASK, reqDeleteTask),
  ]);
}

export default mySaga;
