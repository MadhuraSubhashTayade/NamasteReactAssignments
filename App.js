import React from "react";
import  ReactDOM  from "react-dom";

{
  /* <div id='parent'>
      <div id='child'>
          <h1>I am h1 tag</h1>
          <h2>I am h2 tag</h2>
      </div>
  </div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag by namaste react"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World using React"
);
console.log(heading); //object (ReactElement)

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
root.render(parent);
