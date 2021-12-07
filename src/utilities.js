export function calculatePrice(price, currency) {
    switch (currency) {
        case 'JPY': 
            return price * 113.54;
        case 'PHP':
            return price * 50.32;
        default:
             return price;   
    }
}

export function calculateTotal(cart, currency) {
    let totalUSD = 0;

    Object.keys(cart).forEach((itemName) => {
      totalUSD += cart[itemName].price * cart[itemName].quantity;  
    })

    return calculatePrice(totalUSD, currency).toFixed(2);
}

export function getCurrencySymbol(currencyFilter) {
    switch (currencyFilter) {
        case 'USD':
            return '$';
        case 'JPY':
            return '¥';
        case 'PHP':
            return '₱';
        default:
            return '';        
    }
}