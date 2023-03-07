import React from "react";
import { NormalForm } from "./nornal-form";

export const HocPage = () => {
  const handleNormalSubmit = (data) => alert(data);
  return (
    <>
      <h2>Example without High Order Component (HOC)</h2>
      <NormalForm onSubmit={handleNormalSubmit} />
      <hr></hr>

      <h2>Example with High Order Component (HOC)</h2>
    </>
  );
};
