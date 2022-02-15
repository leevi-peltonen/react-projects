import React from "react";



const Navigation = (props) => {
  return (
  <nav>
      <button onClick={props.scroll()}>Tietoja</button>
  </nav>
  );
};

export default Navigation;
