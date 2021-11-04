export const addItem = (itemToAdd) => {
    return {
        type: 'cart/addItem',
        payload: itemToAdd
    }
};

const changeItemQuantity = (iteName, newQuantity) => {
    return {
        type: 'cart/changeItemQuantity',
        payload: {
            itemName, newQuantity
        }
    }
};

const initialCart = [];
export const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
        case 'cart/addItem': {
            const { itemName, price } = action.payload;

            // If item alreadt exists, increase the quantity by 1, otherwise set it to 1

            const quantity = cart[itemName] ? cart[itemName].quantity + 1 : 1;

            const newItem = { price, quantity };

            // Add the new item to the cart (or replace it if it existed already)

            return {
                ...cart,
                [itemName]: newItem
            }
        };

        
    }
}