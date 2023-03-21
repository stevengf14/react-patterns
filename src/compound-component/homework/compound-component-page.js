import React from "react";
import { Todo } from "./normal-todo";
import { FinalTodo } from "./final-todo";

export const CompoundComponentPageHomework = () => (
  <>
    <h2>Example without Compound Component</h2>
    <Todo
      title="Without Component Pattern :o"
      footer="Developed by Steven Guaman - March 2023"
    />
    <hr></hr>

    <h2>Example with Compound Component</h2>
    <FinalTodo>
      <FinalTodo.Title>
        <h2>With Component Pattern :o</h2>
      </FinalTodo.Title>
      <FinalTodo.Form />
      <FinalTodo.Message />
      <FinalTodo.Footer>
        Developed by Steven Guaman - March 2023
      </FinalTodo.Footer>
    </FinalTodo>
  </>
);
