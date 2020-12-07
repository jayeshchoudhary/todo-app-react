import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import DeleteAllTodos from "./components/DeleteAllTodos";
import CompleteAllTodos from "./components/CompleteAllTodos";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

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
  const completeTodo = (i) => {
    const newTodos = [...todos];
    newTodos[i].isCompleted = !newTodos[i].isCompleted;
    setTodos(newTodos);
  };

  // handler to remove todo
  const removeTodo = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
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
  const editTodo = (i, newText) => {
    const newTodos = [...todos];
    newTodos[i].text = newText;
    setTodos(newTodos);
  };

  // handler to check todo
  const checkTodo = (i) => {
    const newTodos = [...todos];
    newTodos[i].isChecked = !newTodos[i].isChecked;
    setTodos(newTodos);
  };

  // handler to completeAll todo
  const completeAllTodos = () => {
    todos.map((todo, i) => {
      return todo.isChecked ? (completeTodo(i), checkTodo(i)) : null;
    });
  };

  const onDragEnd = (result) => {
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
    // console.log(result);
  };

  return (
    <div className="app">
      <Header />
      <div className="todo-list">
        <AddTodo addTodo={addTodo} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todoapp">
            {(provided) => (
              <div
                className="todoapp"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todos.map((todo, i) => {
                  return (
                    <Todo
                      key={i}
                      i={i}
                      todo={todo}
                      completeTodo={completeTodo}
                      removeTodo={removeTodo}
                      editTodo={editTodo}
                      checkTodo={checkTodo}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {todos.filter((todo) => todo.isChecked === true).length > 1 ? (
          <DeleteAllTodos deleteAllTodos={deleteAllTodos} />
        ) : null}
        {todos.filter(
          (todo) => todo.isChecked === true && todo.isCompleted === true
        ).length > 1 ? (
          <CompleteAllTodos
            completeAllTodos={completeAllTodos}
            actionText="Incomplete All"
          />
        ) : todos.filter(
            (todo) => todo.isChecked === true && todo.isCompleted === false
          ).length > 1 ? (
          <CompleteAllTodos
            completeAllTodos={completeAllTodos}
            actionText="Complete All"
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
