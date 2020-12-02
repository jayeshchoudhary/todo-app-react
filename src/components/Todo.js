import React from "react";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  const markComplete = (e) => {
    completeTodo(index);
  };
  return (
    <div className="todo">
      <p style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
        <input type="checkbox" onChange={markComplete} />
        {todo.text}
      </p>
      <button class="remove" onClick={() => removeTodo(index)}>
        x
      </button>
    </div>
  );
};

export default Todo;
