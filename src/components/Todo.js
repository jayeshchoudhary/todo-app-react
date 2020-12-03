import React, { useState } from "react";

const Todo = ({ todo, index, completeTodo, removeTodo, editTodo }) => {
  // state for editing todo
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState("");

  // handler to toggle editing
  const handleEdit = () => {
    if (editing === false) {
      setEditing(true);
      setText(todo.text);
    } else {
      setEditing(false);
      editTodo(index, text);
    }
  };

  // handle Input Change
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <input
        className="add-input"
        type="checkbox"
        onChange={() => completeTodo(index)}
        checked={todo.isCompleted}
      />
      <p>{todo.text}</p>
      <div className="btns">
        <button className="remove-btn" onClick={() => removeTodo(index)}>
          Delete
        </button>
        <button className="edit-btn" onClick={handleEdit}>
          Edit
        </button>
      </div>
      {editing ? (
        <div className="edit-input">
          <input type="text" value={text} onChange={handleInputChange} />
        </div>
      ) : null}
    </div>
  );
};

export default Todo;
