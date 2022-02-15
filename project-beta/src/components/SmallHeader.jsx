import React from "react";

const SmallHeader = (props) => {
  return (
    <div className="container" id={props.id}>
      <h2>{props.text}</h2>
    </div>
  );
};

export default SmallHeader;
