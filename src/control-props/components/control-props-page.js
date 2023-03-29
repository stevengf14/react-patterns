import React from "react";

import { LikeButton } from "./like-button";

export const ControlPropsPage = () => (
  <>
    <h2>Example without Control Props</h2>
    <LikeButton cb={(likes) => likes + 10} />
    <hr></hr>

    <h2>Example with Control Props</h2>
  </>
);
