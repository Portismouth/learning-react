import React from "react";

// Components
import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import Option from "./Option";
import Options from "./Options";
import OptionModal from "./OptionModal";

// import { Button } from "reactstrap";

export default class IndecisionApp extends React.Component {
  state = { 
    options: [], 
    selectedOption: undefined 
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteSingleOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNum];

    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter a valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists!";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    //access to props and state
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
          <Options
            options={this.state.options}
            hasOptions={this.state.options.length > 0}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteSingleOption={this.handleDeleteSingleOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
