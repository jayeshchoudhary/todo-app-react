import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Draggable } from "react-beautiful-dnd";

const Todo = ({ todo, i, completeTodo, removeTodo, editTodo, checkTodo }) => {
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
      editTodo(i, text);
    }
  };

  // handle if the user press enter after edit
  const handleEnterInput = (e) => {
    if (e.keyCode === 13) {
      setEditing(false);
      editTodo(i, text);
    }
  };

  // handle Input Change
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Draggable key={i} draggableId={i.toString()} index={i}>
      {(provided) => (
        <div
          className={todo.isCompleted ? "completed todo" : "todo"}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <input
            className="add-input"
            type="checkbox"
            onChange={() => checkTodo(i)}
            checked={todo.isChecked}
          />
          {editing ? (
            <div className="edit-input">
              <input
                type="text"
                value={text}
                onChange={handleInputChange}
                onKeyDown={handleEnterInput}
                autoFocus
              />
            </div>
          ) : (
            <p>{todo.text}</p>
          )}
          <div className="btns">
            <button className="complete-btn" onClick={() => completeTodo(i)}>
              <i className="fa fa-check"></i>
            </button>
            <button className="remove-btn" onClick={() => removeTodo(i)}>
              <i className="fa fa-trash"></i>
            </button>
            <button className="edit-btn" onClick={handleEdit}>
              <i className="fa fa-edit"></i>
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
