import { inventoryData } from '../../data';

export const loadData = (data) => {
    return {
        type: 'inventory/loadData',
        payload: inventoryData
    };
};

const initialInventory = [];
