import React, { useState } from "react";
import { ErrorBoundary } from "./error-boundary";
import { FinalErrorBoundary } from "./final-error-boundary";

const MyBug = () => {
  const [isError, setIsError] = useState(false);

  const handleCrash = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("nani?");
  }

  return <button onClick={handleCrash}>Crash app</button>;
};

export const RenderPropsPage = () => (
  <>
    <h2>Example without Render Props</h2>
    <ErrorBoundary>
      <MyBug />
    </ErrorBoundary>
    <hr></hr>
    <h2>Example with Render Props</h2>
    <FinalErrorBoundary
      render={(error) => (
        <p>
          Oops! D: <strong>{`${error.message}`}</strong>
        </p>
      )}
    >
      <MyBug />
    </FinalErrorBoundary>
  </>
);
