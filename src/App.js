import React, { useState } from "react";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import TodoFilter from "./TodoFilter.js";
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

  const doneTodos = todos.filter((todo) => todo.done);
  const todoTodos = todos.filter((todo) => !todo.done);

  const getFilteredList = () => {
    switch (filter) {
      case "all":
        return todos;
      case "done":
        return doneTodos;
      case "todo":
        return todoTodos;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoForm submitForm={submitForm} value={value} onChange={onChange} />

      <TodoList
        todoList={getFilteredList()}
        removeTodo={removeTodo}
        handleChecked={handleChecked}
        setFilter={setFilter}
      />

      <TodoFilter
        setFilter={setFilter}
        todos={todos}
        doneTodos={doneTodos}
        todoTodos={todoTodos}
      />
    </div>
  );
}

export default App;
