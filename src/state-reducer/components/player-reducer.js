import { useState } from "react";
import {
  usePlayerReducer,
  actionTypes,
  playerReducer,
} from "../hooks/use-player-reducer";

const LIMIT_TIMES = 5;

export const PlayerReducer = () => {
  const [count, setCount] = useState(0);
  const clickedMoreTimes = () => count >= LIMIT_TIMES;

  const { tooglePlay, play, pause, isPlaying } = usePlayerReducer({
    reducer(state, action) {
      const stateUpdated = playerReducer(state, action);

      if (action.type === actionTypes.PLAY && clickedMoreTimes()) {
        alert("Limit reached");
        return {
          isPlaying: false,
        };
      }
      return stateUpdated;
    },
  });

  const handlePlay = () => {
    setCount(count + 1);
    play();
  };

  return (
    <div className="App">
      <h1>Example of State Reducer Pattern</h1>
      <p>You clicked {count} times!</p>
      <p>
        Current status: <b>{isPlaying ? "playing" : "paused"}</b>
      </p>
      <button disabled={clickedMoreTimes()} onClick={handlePlay}>
        Start
      </button>
      <button onClick={pause}>Pause</button>
      <button onClick={tooglePlay}>Toogle</button>
    </div>
  );
};
