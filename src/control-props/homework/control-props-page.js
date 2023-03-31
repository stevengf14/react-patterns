import React, { useState } from "react";
import { FinalLikeButton } from "./final-like-button";

export const ControlPropsPageHomework = () => {
  const [counter, setCounter] = useState(0);
  const handleUpdateCounter = () => {
    setCounter(counter + 1);
  };
  const handleChange = ({ target: { value } }) => {
    if (value !== "") {
      const num = parseInt(value);
      if (!isNaN(num)) {
        setCounter(num);
      } else {
        setCounter(0);
      }
    } else {
      setCounter(0);
    }
  };
  return (
    <>
      <h2>Example with Control Props</h2>
      <input type="text" onChange={handleChange} />
      <FinalLikeButton value={counter} setValue={handleUpdateCounter} />
    </>
  );
};
