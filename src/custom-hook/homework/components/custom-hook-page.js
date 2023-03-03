import React from "react";

import { NormalExample } from "./normal-example";
import { CustomHookExample } from "./custom-hook-example";

export const CustomHookPageHomework = () => (
  <>
    <h2>Custom Hook</h2>
    <p>This is the homework of Custom Hook.</p>
    <h3>Example without Custom Hook</h3>
    <NormalExample />
    <hr />

    <h3>Example with Custom Hook</h3>
    <CustomHookExample />
  </>
);
