"use strict";

console.log("app.js is running");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  " ",
  React.createElement(
    "p",
    null,
    "test text"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
