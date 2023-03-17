import React from "react";
import { Todo } from "./normal-todo";
import { FinalTodo } from "./final-todo";

export const CompoundComponentPage = () => (
  <>
    <h2>Example without Compound Component</h2>
    <Todo title="Without Component Pattern :o" />
    <hr></hr>

    <h2>Example with Compound Component</h2>
    <FinalTodo>
      <FinalTodo.Title>
        <h2>With Component Pattern :o</h2>
      </FinalTodo.Title>
      <FinalTodo.Form />
      <FinalTodo.List />
    </FinalTodo>
  </>
);
