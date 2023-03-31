import { useState } from "react";

export const FinalLikeButton = ({ value, setValue }) => {
  const isControlled = value !== undefined && setValue !== undefined;
  const [likes, setLikes] = useState(0);

  const handleClick = () => (isControlled ? setValue() : setLikes(likes + 1));
  const repeatedElements = Array(value)
    .fill()
    .map((_, index) => {
      return (
        <div key={index}>
          <span role="img" aria-label="like">
            👍
          </span>
        </div>
      );
    });
  return (
    <div>
      <button onClick={handleClick}>
        <span role="img" aria-label="like" border-style="solid">
          👍
        </span>
        {isControlled ? value : likes}
      </button>
      {repeatedElements}
    </div>
  );
};
