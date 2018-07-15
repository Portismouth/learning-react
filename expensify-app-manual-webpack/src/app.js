import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

//Redux imports
import { Provider } from 'react-redux'; 
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

//Styles import
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(
  addExpense({ description: 'Water Bill', amount: 500, createdAt: 2000 })
);
store.dispatch(
  addExpense({ description: 'Gas Bill', amount: 800, createdAt: 0 })
);
store.dispatch(
  addExpense({ description: 'Rent', amount: 109500, createdAt: 0 })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
