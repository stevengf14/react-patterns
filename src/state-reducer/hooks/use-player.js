import { useState } from "react";

export const usePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const tooglePlay = () => setIsPlaying(!isPlaying);
  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);

  return {
    tooglePlay,
    isPlaying,
    play,
    pause,
  };
};
