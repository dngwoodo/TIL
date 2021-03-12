import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  return (
    <>
      <TodoForm data-testid="helloworld" />
      <TodoList todos={[]} />
    </>
  );
};

export default TodoApp;
