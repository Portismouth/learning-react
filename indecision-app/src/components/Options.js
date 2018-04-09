import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteSingleOption={props.handleDeleteSingleOption}
      />
    ))}
    <button onClick={props.handleDeleteOptions} disabled={!props.hasOptions}>
      Remove All
    </button>
  </div>
);

export default Options;
