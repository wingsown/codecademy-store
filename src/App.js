import React from 'react';
import './App.css';
import { CurrencyFilter } from './features/currencyFilter/CurrencyFilter';
import { Inventory } from './features/inventory/Inventory';
import { Cart } from './features/cart/Cart';
import { SearchTerm } from './features/searchTerm/SearchTerm';



export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div className="App">
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <SearchTerm 
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />


    </div>
  );
}

export default App;
