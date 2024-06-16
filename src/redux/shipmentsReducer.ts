import { ActionTypes, ADD_SHIPMENT, UPDATE_SHIPMENT_STATUS, REMOVE_SHIPMENT } from './actions';
import { Shipment } from '../types';

const initialState: Shipment[] = [];

export const shipmentsReducer = (state = initialState, action: ActionTypes): Shipment[] => {
  switch (action.type) {
    case ADD_SHIPMENT:
      return [...state, action.payload];
    case UPDATE_SHIPMENT_STATUS:
      return state.map(shipment =>
        shipment.id === action.payload.id ? { ...shipment, status: action.payload.status } : shipment
      );
    case REMOVE_SHIPMENT:
      return state.filter(shipment => shipment.id !== action.payload);
    default:
      return state;
  }
};
