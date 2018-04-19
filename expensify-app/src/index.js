// import React from "react";
// import ReactDOM from "react-dom";
// import AppRouter from "./routers/AppRouter"
// import "./styles/styles.css";
// import "normalize.css/normalize.css";

// ReactDOM.render(<AppRouter />, document.getElementById("root"));

import { createStore, combineReducers } from "redux";

//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

//Expenses Reducer

const expensesReducer = (state = [], action)  => {
  
};

const demoState = {
  expenses: [{
    id: 'lkjalkdjasd',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};