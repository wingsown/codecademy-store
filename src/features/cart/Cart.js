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
    }
}