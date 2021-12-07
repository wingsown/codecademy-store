import React from 'react';
import { calculateTotal, getCurrencySymbol } from '../../utilities';
import { changeItemQuantity } from './cartSlice';

export const Cart = (props) => {
    const { cart, currencyFilter, dispatch } = props;

    const onInputChangeHandler = (itemName, input) => {
        
        //If user enters a bad value
        if(input === '') {
            return;
        }

        //Otherwise, convert the input into a number and pass it along as the newQuantity
        const newQuantity = Number(input);

        // Dispatch an action to change the quantity of the given name and quantity.
        dispatch(changeItemQuantity(itemName, newQuantity));
    };

    const cartElements = [];

    for (let item in cart){
        cartElements.push(createCartItem(item));
    }

    const total = calculateTotal(cart, currencyFilter);

    return (
        <div id="cart-container">
            <ul id="cart-items">{cartElements}</ul>
            <h3 className="total">
                Total{' '}
                <span className="total-value">
                    {getCurrencySymbol(currencyFilter)} {total}
                </span>
            </h3>
        </div>
    );

    function createCartItem(itemName) {
        const item = cart[itemName];

        if (item.quantity === 0) {
            return;
        }

        return (
            <li key={itemName}>
                <p>{itemName}</p>
                <select
                className="item-quantity"
                value={item.quantity}
                onChange={(e) => {
                    onInputChangeHandler(itemName, e.target.value)
                }}>
                    {[...Array(100).keys()].map((_,index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}
                </select>
            </li>
        )
    }

}