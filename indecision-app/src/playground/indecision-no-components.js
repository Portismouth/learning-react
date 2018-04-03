import React from 'react';
import ReactDOM from 'react-dom';

const app = {
    title: 'Indecision-App',
    subtitle: 'Hand my life over to a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const makeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNum];
    alert(option);
}

const removeOptions = () => {
    app.options = [];
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <button disabled={app.options.length == 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, document.getElementById('root'));
}


renderApp();