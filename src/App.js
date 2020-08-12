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
  const [filter, setFilter] = useState("all");

  const submitForm = (e) => {
    e.preventDefault();
    setTodos([...todos, { task: value, done: false, id: uuid() }]);
    setValue("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleChecked = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const showAll = todos.map((todo) => (
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
  ));

  const showDone = todos
    .filter((todo) => todo.done)
    .map((todo) => (
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
    ));

  const showTodo = todos
    .filter((todo) => !todo.done)
    .map((todo) => (
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
    ));

  const getFilteredList = () => {
    switch (filter) {
      case "all":
        return showAll;
      case "done":
        return showDone;
      case "todo":
        return showTodo;
      default:
        break;
    }
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
      {getFilteredList()}
      <button onClick={() => setFilter("all")}>All ({showAll.length})</button>
      <button onClick={() => setFilter("done")}>
        Done ({showDone.length})
      </button>
      <button onClick={() => setFilter("todo")}>
        Todo ({showTodo.length})
      </button>
    </div>
  );
}

export default App;
