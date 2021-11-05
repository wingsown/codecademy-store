export function calculatePrice(price, currency) {
    switch (currency) {
        case 'EUR': 
            return price * 0.86;
        case 'CAD':
            return price * 1.33;
        default:
             return price;   
    }
}