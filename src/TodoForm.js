import React from "react";

const TodoForm = ({ submitForm, value, onChange }) => {
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="add a todo"
        value={value}
        onChange={onChange}
      />
      <input type="submit" value="add" />
    </form>
  );
};

export default TodoForm;
