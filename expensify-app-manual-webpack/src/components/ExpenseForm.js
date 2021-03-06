import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      calendarFocused: false,
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      description: props.expense ? props.expense.description : '',
      error: false,
      note: props.expense ? props.expense.note : ''
    }
  }

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({ createdAt }))
    }
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: true
      }))
    } else {
      this.setState(() => ({
        error: false
      }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>Please fill in the appropriate fields.</p>}
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            onChange={this.onDescriptionChange}
            placeholder="Description"
            type="text"
            value={this.state.description}
          />
          <input
            onChange={this.onAmountChange}
            placeholder="Amount"
            type="text"
            value={this.state.amount}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
