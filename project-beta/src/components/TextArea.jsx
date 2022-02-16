import React from "react";
import about from "../TextContent/text";

const TextArea = (props) => {
  return (
    <div className="container">
      {about.map((text, index) => {
        return (
          <div key={index} style={{backgroundColor: "grey",margin:"15px", boxShadow: "10px 10px white"}}>
            <h4>{text.name}: {text.role}</h4>
            <p>{text.funFact}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TextArea;
