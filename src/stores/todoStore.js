import { makeObservable, observable, action, get } from 'mobx';
import clientServer from '../server/clientServer';
import { STATUS } from '../constants';

class TodoStore {
  todoItems = [];
  currentItem = {
    id: '',
    title: '',
    creator: '',
    description: '',
    status: STATUS.NEW,
  };

  constructor() {
    makeObservable(this, {
      todoItems: observable,
      currentItem: observable,
      setTodos: action,
      setCurrentItem: action,
    });
  }

  setTodos(todoItems) {
    this.todoItems = todoItems;
  }

  setCurrentItem(currentItem) {
    this.currentItem = currentItem;
  }

  get Todos() {
    return this.todoItems;
  }

  get CurrentItem() {
    return this.currentItem;
  }

  reqAllTodos(keyword) {
    clientServer
      .get(`todoItems`)
      .then((res) => {
        this.todoItems = res.data.filter((item) =>
          item.title.toLowerCase().includes(keyword || '')
        );
      })
      .catch((err) => {
        console.error('error:', err);
      });
  }

  reqTodosByStatus(status, keyword) {
    clientServer
      .get(`todoItems?status=${status}`)
      .then((res) => {
        this.todoItems = res.data.filter((item) =>
          item.title.toLowerCase().includes(keyword || '')
        );
      })
      .catch((err) => {
        console.error('error:', err);
      });
  }

  reqDetailTask = (idTask) => {
    clientServer
      .get(`todoItems/${idTask}`)
      .then((res) => {
        this.currentItem = res.data;
      })
      .catch((err) => {
        console.error('error:', err);
      });
  };

  reqAddNewTask = (data, successCallBack, failedCallBack) => {
    clientServer
      .post('todoItems', data)
      .then(() => {
        successCallBack();
      })
      .catch((err) => {
        failedCallBack(err);
      });
  };

  reqEditTask = (data, successCallBack, failedCallBack) => {
    clientServer
      .patch(`todoItems/${data.id}`, data)
      .then(() => {
        successCallBack();
      })
      .catch((err) => {
        failedCallBack(err);
      });
  };

  reqDeleteTask = (id, successCallBack, failedCallBack) => {
    clientServer
      .delete(`todoItems/${id}`)
      .then(() => {
        successCallBack();
      })
      .catch((err) => {
        failedCallBack(err);
      });
  };
}

const todoStore = new TodoStore();
export default todoStore;
