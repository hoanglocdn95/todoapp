import TodoItem from './TodoItem.ts';

const ListTodoItem = ({ todoItems }) => {
  return todoItems.map((item, index) => (
    <TodoItem
      key={`${item.title}_${index}`}
      title={item.title}
      creator={item.creator}
      status={item.status}
      description={item.description}
      idTask={item.id}
    />
  ));
};

export default ListTodoItem;
