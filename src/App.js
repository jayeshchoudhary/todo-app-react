import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import DeleteAllTodos from "./components/DeleteAllTodos";
import CompleteAllTodos from "./components/CompleteAllTodos";

function App() {
  // Todo State
  const [todos, setTodos] = useState([
    {
      text: "Make Todo React app",
      isCompleted: false,
      isChecked: false,
    },
    {
      text: "Buy Groceries",
      isCompleted: false,
      isChecked: false,
    },
    {
      text: "Meet friends in evening",
      isCompleted: false,
      isChecked: false,
    },
    {
      text: "Do a hair Cut",
      isCompleted: false,
      isChecked: false,
    },
    {
      text: "Light Bill Pay",
      isCompleted: false,
      isChecked: false,
    },
  ]);

  // handler for adding new Todo
  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false, isChecked: false }];
    setTodos(newTodos);
  };

  // handler to toggle todo.isComplete
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  // handler to remove todo
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // handler to delete All the selected todos
  const deleteAllTodos = () => {
    const newTodos = todos.filter((todo) => {
      return todo.isChecked === false;
    });
    setTodos(newTodos);
  };

  // handler to edit todo
  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  // handler to check todo
  const checkTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isChecked = !newTodos[index].isChecked;
    setTodos(newTodos);
  };

  // handler to completeAll todo
  const completeAllTodos = () => {
    todos.map((todo, index) => {
      return todo.isChecked ? (completeTodo(index), checkTodo(index)) : null;
    });
    // setTodos(newTodos);
  };

  return (
    <div className="app">
      <Header />
      <div className="todo-list">
        <AddTodo addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
            checkTodo={checkTodo}
          />
        ))}
        {todos.filter((todos) => todos.isChecked === true).length > 1 ? (
          <DeleteAllTodos deleteAllTodos={deleteAllTodos} />
        ) : null}
        {todos.filter((todos) => todos.isChecked === true).length > 1 ? (
          <CompleteAllTodos completeAllTodos={completeAllTodos} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
