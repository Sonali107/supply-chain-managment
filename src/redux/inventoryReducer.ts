import { ActionTypes, ADD_INVENTORY_ITEM, REMOVE_INVENTORY_ITEM, UPDATE_INVENTORY_ITEM } from './actions';
import { InventoryItem } from '../types';

const initialState: InventoryItem[] = [];

export const inventoryReducer = (state = initialState, action: ActionTypes): InventoryItem[] => {
  switch (action.type) {
    case ADD_INVENTORY_ITEM:
      return [...state, action.payload];
    case UPDATE_INVENTORY_ITEM:
      return state.map(item =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    case REMOVE_INVENTORY_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};
