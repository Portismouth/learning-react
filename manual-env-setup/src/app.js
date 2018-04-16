console.log("app.js is running");

var template = (
  <div>
    <h1>Indecision App</h1> <p>test text</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
