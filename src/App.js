import React from 'react';
import './App.css';
import { CurrencyFilter } from './features/currencyFilter/CurrencyFilter';





export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div className="App">
      <CurrencyFilter/>

    </div>
  );
}

export default App;
