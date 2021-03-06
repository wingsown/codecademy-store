export const addItem = (itemToAdd) => {
    return {
        type: 'cart/addItem',
        payload: itemToAdd
    };
};


 export const changeItemQuantity = (itemName, newQuantity) => {
    return {
        type: 'cart/changeItemQuantity',
        payload: {
            itemName, newQuantity
        }
    }
};

const initialCart = [];
export const cartReducer = (cart = initialCart, action) => {
    switch(action.type) {
        case 'cart/addItem': {
            const { itemName, price } = action.payload;

            // if the item already exists, increase the quantity by 1, otherwise set it to 1
            const quantity = cart[itemName] ? cart[itemName].quantity + 1 : 1;
            const newItem = { price, quantity};


            // Add the new item to the cart (or replace it if it existed already)
                return {
                    ...cart,
                    [itemName]: newItem
                };
        }

        case 'cart/changeItemQuantity': {
            const { itemName, newQuantity } = action.payload;
            const itemToUpdate = cart[itemName];

            // Create a copy of itemToUpdate and update the quantity prop.
            const updatedItem = {
                ...itemToUpdate,
                quantity: newQuantity
            }

            // Return a copy of the cart with the updatedItem included.
            return {
                ...cart,
                [itemName]: updatedItem
            };
        }

        default: {
            return cart;
        }
    }
};