import React, { useEffect } from 'react';
import { calculatePrice, getCurrencySymbol } from '../../utilities';
import { addItem } from '../cart/cartSlice';
import { loadData } from './inventorySlice';

