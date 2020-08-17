import React from "react";

const TodoForm = ({ submitForm, value, onChange }) => {
  const formStyle = {
    width: "500px",
    margin: "auto",
    display: "flex",
  };

  const inputStyle = {
    flexGrow: "1",
    marginRight: "10px",
  };
  return (
    <form onSubmit={submitForm} style={formStyle}>
      <input
        style={inputStyle}
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
