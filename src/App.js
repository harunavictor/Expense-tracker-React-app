import React from 'react';
import {Header} from './Component/Header'
import './App.css';
import Balance from './Component/Balance';
import IncomeExpenses from './Component/IncomeExpenses'
import TransactionList from './Component/TransactionList';
import AddTransaction from './Component/AddTransaction'

import {GlobalProvider} from './Context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header title={'Expense Tracker'} />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
