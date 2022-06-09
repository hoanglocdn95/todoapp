const TodoItem = () => {
  return (
    <div className="containerItem">
      <p className="containerItem__title">Title: task 1</p>
      <p className="containerItem__creator">Creator: Loc</p>
      <p className="containerItem__status containerItem__status--new">
        Status: New
      </p>
      <hr className="containerItem__lineBreak" />
      <div className="containerItem__description">
        <p>Description:</p>
        <p>
          This is a task, This is a task, This is a task, This is a task, This
          is a task, This is a task
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
