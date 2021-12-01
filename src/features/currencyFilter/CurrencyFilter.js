import React from 'react';
import { currenciesData } from '../../data';
import { setCurrency } from '../currencyFilter/currencyFilterSlice';

export const CurrencyFilter = ({ currencyFilter, dispatch }) => {
    
    const onClickHandler = (currency) => {
        dispatch(setCurrency(currency));
    };

   return (
       <div>
           <h3>Choose a currency</h3>
           {currenciesData.map(createCurrencyButton)}
       </div>
   );
   
   function createCurrencyButton(currency) {
       return (
           <button
           className={`currency-button ${currencyFilter === currency && 'selected'}`}
           key={currency}
           onClick={() => onClickHandler(currency)}>
               {currency}
           </button>
       );
   };
};
