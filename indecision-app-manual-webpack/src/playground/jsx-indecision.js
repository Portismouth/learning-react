//JSX - JavaScript XML
const app = {
  title: "Indecision App",
  subtitle: "Another to-do list app",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderIndecisionApp();
  }
};

const removeOptions = () => {
  app.options = [];
  renderIndecisionApp();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};

const appRoot = document.getElementById("app");

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>Indecision App</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        What Should I Do?
      </button>
      <button onClick={removeOptions}>Remove All Options</button>
      <ol>{app.options.map(option => <li key={option}>{option}</li>)}</ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
