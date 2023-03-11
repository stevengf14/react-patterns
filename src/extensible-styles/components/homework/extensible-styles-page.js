import React from "react";

import { CustomButton } from "./custom-button";
import { CustomComponent } from "./custom-component";

export const ExtensibleStylesPageHomework = () => (
  <>

    <h2>Example with Extensible Styles</h2>

    <CustomComponent className="div">This is a div</CustomComponent>
    <CustomComponent className="card">This is a card</CustomComponent>
    <hr></hr>
    <hr></hr>
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
