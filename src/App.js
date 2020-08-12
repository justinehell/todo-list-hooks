import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";

function App() {
  const initialList = [
    {
      task: "learn JS",
      done: true,
      id: uuid(),
    },
    {
      task: "learn React",
      done: true,
      id: uuid(),
    },
    {
      task: "learn Node",
      done: false,
      id: uuid(),
    },
  ];

  const [todos, setTodos] = useState(initialList);
  const [value, setValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setTodos([...todos, { task: value, done: false, id: uuid() }]);
    setValue("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="add a todo"
          value={value}
          onChange={onChange}
        />
        <input type="submit" value="add" />
      </form>

      {todos.map((todo) => (
        <div key={todo.id}>{todo.task}</div>
      ))}
    </div>
  );
}

export default App;
