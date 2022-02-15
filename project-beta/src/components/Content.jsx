import React from "react";

const Content = (props) => {
  return (
    <div>
      <h2>{props.header}</h2>
      <iframe
        width={props.width}
        height={props.height}
        src={props.src}
        title={props.title}
        frameBorder={props.frameborder}
        allow={props.allow}
      ></iframe>
    </div>
  );
};

export default Content;
