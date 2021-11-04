import React from 'react';
import { changeItemQuantity } from './cartSlice';

export const Cart = (props) => {
    const { cart } = props;

    const onInputChangeHandler = (itemName, input ) => {
        
        // If the user enters a bad value

        if (input === '') {
            return;
        }

        //Otherwise, convert the input into a number and pass it along as the newQuantity.
        const newQuantity = Number(input);
    };

    return (
        <div id="cart-container">
            
        </div>
    )

}