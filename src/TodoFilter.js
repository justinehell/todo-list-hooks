import React from "react";

const TodoFilter = ({ setFilter, todos, doneTodos, todoTodos }) => {
  return (
    <div>
      <button onClick={() => setFilter("all")}>All ({todos.length})</button>
      <button onClick={() => setFilter("done")}>
        Done ({doneTodos.length})
      </button>
      <button onClick={() => setFilter("todo")}>
        Todo ({todoTodos.length})
      </button>
    </div>
  );
};

export default TodoFilter;
