const initialCurrencyFilter = 'USD';

export const currencyFilterReducer = (currencyFilter = initialCurrencyFilter, action) => {
    switch (action.type) {
        case 'currencyFilter/setCurrency': {
            return action.payload;
        }
        default:
            return currencyFilter;
    }
};
