import React from "react";
import { NormalForm } from "./normal-form";
import { MyFormAControlled } from "./form-with-hoc";

export const HocPageHomework = () => {
  const handleNormalSubmit = (data) => alert(data);
  const handleHocSubmit = (data) => alert(JSON.stringify(data));
  return (
    <>
      <h2>Example without High Order Component (HOC)</h2>
      <NormalForm onSubmit={handleNormalSubmit} />
      <hr></hr>

      <h2>Example with High Order Component (HOC)</h2>
      <MyFormAControlled onSubmit={handleHocSubmit} />
    </>
  );
};
