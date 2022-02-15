import React, { useState } from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  const [value, setValue] = useState(0);
  const [hidden, setHidden] = useState(false);

  const increase = () => {
    setValue(value + props.score + 1);
    setHidden(true);
  };
  const decrease = () => {
    if (value > 0) {
      setValue(value - props.score - 1);
      setHidden(true);
    }
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>Tykkäykset: {value}</p>

      <button
        className="thumbsDown"
        onClick={decrease}
        style={{ display: hidden ? "none" : null }}
      ></button>
      <button
        className="thumbsUp"
        onClick={increase}
        style={{ display: hidden ? "none" : null }}
      ></button>
    </div>
  );
}

export default Note;
// const Trash = () => {
//   return <button className="trash" onClick={handleClick}></button>;
// }
