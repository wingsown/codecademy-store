import React from 'react';
import './App.css';
import { CurrencyFilter } from './features/currencyFilter/CurrencyFilter';
import { Cart } from './features/cart/Cart';




export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div className="App">
      <CurrencyFilter/>
      <Cart/>
    </div>
  );
}

export default App;
