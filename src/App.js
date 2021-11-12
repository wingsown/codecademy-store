import React from 'react';
import './App.css';
import { CurrencyFilter } from './features/currencyFilter/CurrencyFilter';
import { Inventory } from './features/inventory/Inventory';


export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div className="App">
      <CurrencyFilter/>
      <Inventory/>
    </div>
  );
}

export default App;
