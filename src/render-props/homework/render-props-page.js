import React, { useState } from "react";
import { FinalComposedComponent } from "./final-composed-component";

export const RenderPropsPageHomework = () => {
  const [number, setNumber] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setNumber(value);
  };

  return (
    <>
      <h2>Example with Render Props</h2>
      <div>
        <label>
          Number:
          <input
            type="text"
            value={number}
            onChange={handleInputChange}
            style={{ marginLeft: 3 }}
          />
        </label>
      </div>
      <br></br>
      {number !== "" ? (
        <FinalComposedComponent
          render={(number) => (
            <p>
              {console.log(number)}
              The number resultant is <strong>{`${number}`}</strong>
            </p>
          )}
        >{number}</FinalComposedComponent>
      ) : (
        <FinalComposedComponent />
      )}
    </>
  );
};
