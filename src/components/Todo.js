import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

const Todo = ({
  todo,
  index,
  completeTodo,
  removeTodo,
  editTodo,
  checkTodo,
}) => {
  // state for editing todo
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState("");

  // handler to toggle editing
  const handleEdit = (e) => {
    if (editing === false) {
      setEditing(true);
      setText(todo.text);
    } else {
      setEditing(false);
      editTodo(index, text);
    }
  };

  // handle if the user press enter after edit
  const handleEnterInput = (e) => {
    if (e.keyCode === 13) {
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
        onChange={() => checkTodo(index)}
        checked={todo.isChecked}
      />
      {editing ? (
        <div className="edit-input">
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleEnterInput}
          />
        </div>
      ) : (
        <p>{todo.text}</p>
      )}
      <div className="btns">
        <button className="complete-btn" onClick={() => completeTodo(index)}>
          <i className="fa fa-check"></i>
        </button>
        <button className="remove-btn" onClick={() => removeTodo(index)}>
          <i className="fa fa-trash"></i>
        </button>
        <button className="edit-btn" onClick={handleEdit}>
          <i className="fa fa-edit"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
