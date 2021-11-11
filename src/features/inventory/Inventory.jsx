import React, { useEffect } from 'react';
import { calculatePrice, getCurrencySymbol } from '../../utilities';
import { addItem } from '../cart/cartSlice';
import { loadData } from './inventorySlice';

export const Inventory = ({ inventory, currencyFilter, dispatch}) => {
    const onMount = () => {
        dispatch(loadData());
    };

    useEffect(onMount, [dispatch]);

    const onClickHandler = (inventoryItem) => {
        dispatch(addItem(inventoryItem));
    };

    if (inventory.length === 0) {
        return <p> Sorry, no products are currently available...</p>;
    }

    return <ul>
        {inventory.map()}
    </ul>;

    function createInventoryItem(inventoryItem) {
        const { price, name, img } = inventoryItem;

        const displayPrice = calculatePrice(price, currencyFilter);
            return (
                <li>
                    <img/>
                    <h3>{name}</h3>
                    <h3>
                        {getCurrencySymbol(currencyFilter)}
                        {displayPrice.toFixed(2)}
                        {currencyFilter}
                    </h3>
                    <button>
                        Add to Cart
                    </button>
                </li>
            )
    }
}