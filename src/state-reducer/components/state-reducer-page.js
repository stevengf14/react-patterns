import React from "react";

import { Player } from "./player";
import { PlayerReducer } from "./player-reducer";

export const StateReducerPage = () => (
  <>
    <h2>Example without State Reducer</h2>
    <Player />
    <hr></hr>

    <h2>Example with State Reducer</h2>
    <PlayerReducer />
  </>
);
