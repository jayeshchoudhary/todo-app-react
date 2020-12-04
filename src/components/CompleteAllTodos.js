import React from "react";

const CompleteAllTodos = ({ completeAllTodos }) => {
  return (
    <div>
      <button onClick={completeAllTodos} className="complete-all-btn">
        Complete All
      </button>
    </div>
  );
};

export default CompleteAllTodos;
