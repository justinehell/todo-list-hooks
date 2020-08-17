import React from "react";

const TodoList = ({ todoList, handleChecked, removeTodo, setFilter }) => {
  const divStyle = {
    width: "500px",
    margin: "20px auto",
  };

  const subdivStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 0",
  };
  return (
    <div style={divStyle}>
      {todoList.map((todo) => (
        <div key={todo.id} style={subdivStyle}>
          <label>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleChecked(todo.id)}
              style={{ marginRight: "10px" }}
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
