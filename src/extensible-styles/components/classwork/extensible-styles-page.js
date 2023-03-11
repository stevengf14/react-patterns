import React from "react";

import { Button } from "./normal-button";
import { CustomButton } from "./custom-button";

export const ExtensibleStylesPage = () => (
  <>
    <h2>Example without Extensible Styles</h2>
    <Button type="button">Click</Button>
    <hr></hr>

    <h2>Example with Extensible Styles</h2>
    <CustomButton type="button">Click</CustomButton>
    <CustomButton className="btn btn-success" type="button">
      Click
    </CustomButton>
    <CustomButton className="btn btn-danger" type="button">
      Click
    </CustomButton>

    <CustomButton
      className="btn btn-primary"
      type="button"
      style={{ color: "#ff0000" }}
    >
      Click
    </CustomButton>
  </>
);
