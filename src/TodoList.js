import React from "react";

const TodoList = ({ todoList, handleChecked, removeTodo, setFilter }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleChecked(todo.id)}
            />
            {todo.task}
          </label>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
