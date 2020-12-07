import React from "react";

const CompleteAllTodos = ({ completeAllTodos, actionText }) => {
  return (
    <div>
      <button onClick={completeAllTodos} className="complete-all-btn">
        {actionText}
      </button>
    </div>
  );
};

export default CompleteAllTodos;
