import React, { useState } from "react";

import { LikeButton } from "./like-button";
import { FinalLikeButton } from "./final-like-button";

export const ControlPropsPage = () => {
  const [counter, setCounter] = useState(0);
  const handleUpdateCounter = () => {
    setCounter(counter + 5);
  };
  const handleChange = ({ target: { value } }) => {
    if (value === "like") {
      setCounter(counter + 1);
    }
  };
  return (
    <>
      <h2>Example without Control Props</h2>
      <LikeButton cb={(likes) => likes + 10} />
      <hr></hr>

      <h2>Example with Control Props</h2>
      <input type="text" onChange={handleChange} />
      <FinalLikeButton value={counter} setValue={handleUpdateCounter} />
    </>
  );
};
