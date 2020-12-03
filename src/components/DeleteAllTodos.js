import React from "react";

const DeleteAllTodos = ({ deleteAllTodos }) => {
  return (
    <div>
      <button onClick={deleteAllTodos} className="delete-all-btn">
        Delete All
      </button>
    </div>
  );
};

export default DeleteAllTodos;
