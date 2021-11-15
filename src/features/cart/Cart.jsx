import React from 'react';
import { calculateTotal, getCurrencySymbol } from '../../utilities';
import { changeItemQuantity } from './cartSlice';

export const Cart = (props) => {
    const { cart, currencyFilter, dispatch } = props;

    const onInputChangeHandler = (itemName, input ) => {
        
        // If the user enters a bad value

        if (input === '') {
            return;
        }

        //Otherwise, convert the input into a number and pass it along as the newQuantity.
        const newQuantity = Number(input);
    };

    const cartElements = [];

    for (let itemName in cart) {
        cartElements.push(createCartItem(itemName));
    }

    const total = calculateTotal(cart, currencyFilter);

    return (
        <div id="cart-container">
            <ul id="cart-items">{cartElements}</ul>
            <h3 className="total">
                Total{' '}
                <span className="total-value">
                    {getCurrencySymbol(currencyFilter)}
                    {total}
                    {currencyFilter}
                </span>
            </h3>
        </div>
    );

    function createCartItem(name) {
        const item = cart[name];

        if (item.quantity === 0) {
            return;
        }

        return (
            <li key={name}>
                <p>{name}</p>
                <select 
                name="" 
                id="">
                <option 
                value="">

                </option>
                </select>
            </li>
        )
    }

}