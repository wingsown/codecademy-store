import React, { useEffect } from 'react';

import { calculatePrice, getCurrencySymbol} from '../../utilities';
import { addItem } from '../cart/cartSlice';
import { loadData } from './inventorySlice';

export const Inventory = ({ inventory, currencyFilter, dispatch }) => {
  const onMount = () => {
    dispatch(loadData());
  };
  useEffect(onMount, [dispatch]);

  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem));
  };

  if (inventory.length === 0) {
    return <p> Sorry, no products are currently available... </p>;
  }

  return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>;

  function createInventoryItem(inventoryItem) {
    const { price, itemName, img } = inventoryItem;
    const displayPrice = calculatePrice(price, currencyFilter);
    return (
      <li key={itemName} className="item">
        <img src={img} alt={''} />
        <h3>{itemName}</h3>
        <h3 className="price">
          {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)}
        </h3>
        <button
          onClick={() => onClickHandler(inventoryItem)}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </li>
    );
  }
};
