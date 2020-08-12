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

  return (
    <div className="App">
      {todos.map((todo) => (
        <div key={todo.id}>{todo.task}</div>
      ))}
    </div>
  );
}

export default App;
