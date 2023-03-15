import React from "react";
import { Todo } from "./normal-todo";
import { FinalTodo, TodoTitle, TodoForm, TodoList } from "./final-todo";

export const CompoundComponentPage = () => (
  <>
    <h2>Example without Compound Component</h2>
    <Todo title="Without Component Pattern :o" />
    <hr></hr>

    <h2>Example with Compound Component</h2>
    <FinalTodo>
      <TodoTitle>
        <h2>With Component Pattern :o</h2>
      </TodoTitle>
      <TodoForm />
      <TodoList />
    </FinalTodo>
  </>
);
