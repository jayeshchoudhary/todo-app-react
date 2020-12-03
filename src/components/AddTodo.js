import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  // handler onSubmit will call addTodo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Todo..."
      />
      <button className="todo-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
