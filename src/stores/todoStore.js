import { makeObservable, observable, action } from 'mobx';

class TodoStore {
  todoItems = [];

  constructor() {
    makeObservable(this, {
      todoItems: observable,
      setTodos: action,
    });
  }

  setTodos(todoItems) {
    this.todoItems = todoItems;
  }

  get Todos() {
    return this.todoItems;
  }
}

const todoStore = new TodoStore();
export default todoStore;
