import { ActionTypes, ADD_SUPPLIER, UPDATE_SUPPLIER, REMOVE_SUPPLIER } from './actions';
import { Supplier } from '../types';

const initialState: Supplier[] = [];

export const suppliersReducer = (state = initialState, action: ActionTypes): Supplier[] => {
  switch (action.type) {
    case ADD_SUPPLIER:
      return [...state, action.payload];
    case UPDATE_SUPPLIER:
      return state.map(supplier =>
        supplier.id === action.payload.id ? { ...supplier, ...action.payload } : supplier
      );
    case REMOVE_SUPPLIER:
      return state.filter(supplier => supplier.id !== action.payload);
    default:
      return state;
  }
};
