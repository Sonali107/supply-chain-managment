import { InventoryItem, Shipment, Supplier } from '../types';




export const ADD_INVENTORY_ITEM = 'ADD_INVENTORY_ITEM';
export const UPDATE_INVENTORY_ITEM = 'UPDATE_INVENTORY_ITEM';
export const REMOVE_INVENTORY_ITEM = 'REMOVE_INVENTORY_ITEM';

export const ADD_SHIPMENT = 'ADD_SHIPMENT';
export const UPDATE_SHIPMENT_STATUS = 'UPDATE_SHIPMENT_STATUS';
export const REMOVE_SHIPMENT = 'REMOVE_SHIPMENT';

export const ADD_SUPPLIER = 'ADD_SUPPLIER';
export const UPDATE_SUPPLIER = 'UPDATE_SUPPLIER';
export const REMOVE_SUPPLIER = 'REMOVE_SUPPLIER';

// Inventory Actions
export interface AddInventoryItemAction {
  type: typeof ADD_INVENTORY_ITEM;
  payload: InventoryItem;
}

export interface UpdateInventoryItemAction {
  type: typeof UPDATE_INVENTORY_ITEM;
  payload: InventoryItem;
}

export interface RemoveInventoryItemAction {
  type: typeof REMOVE_INVENTORY_ITEM;
  payload: number; // ID of the item to be removed
}

// Shipment Actions
export interface AddShipmentAction {
  type: typeof ADD_SHIPMENT;
  payload: Shipment;
}



export interface UpdateShipmentStatusAction {
  type: typeof UPDATE_SHIPMENT_STATUS;
  payload: { id: number; status: string }; // ID of the shipment and new status
}

export interface RemoveShipmentAction {
  type: typeof REMOVE_SHIPMENT;
  payload: number; // ID of the shipment to be removed
}

// Supplier Actions
export interface AddSupplierAction {
  type: typeof ADD_SUPPLIER;
  payload: Supplier;
}

export interface UpdateSupplierAction {
  type: typeof UPDATE_SUPPLIER;
  payload: Supplier;
}

export interface RemoveSupplierAction {
  type: typeof REMOVE_SUPPLIER;
  payload: number; // ID of the supplier to be removed
}

export type ActionTypes =
  | AddInventoryItemAction
  | UpdateInventoryItemAction
  | RemoveInventoryItemAction
  | AddShipmentAction
  | UpdateShipmentStatusAction
  | RemoveShipmentAction
  | AddSupplierAction
  | UpdateSupplierAction
  | RemoveSupplierAction;

// Action creators
// export const addInventoryItem = (item: InventoryItem): AddInventoryItemAction => ({
//   type: ADD_INVENTORY_ITEM,
//   payload: item,
// });

export const addInventoryItem = (item: InventoryItem): ActionTypes => ({
    type: ADD_INVENTORY_ITEM,
    payload: item,
  });

export const updateInventoryItem = (item: InventoryItem): UpdateInventoryItemAction => ({
  type: UPDATE_INVENTORY_ITEM,
  payload: item,
});

export const removeInventoryItem = (id: number): RemoveInventoryItemAction => ({
  type: REMOVE_INVENTORY_ITEM,
  payload: id,
});

// export const addShipment = (shipment: Shipment): AddShipmentAction => ({
//   type: ADD_SHIPMENT,
//   payload: shipment,
// });

// export const updateShipmentStatus = (payload: { id: number; status: string }): UpdateShipmentStatusAction => ({
//   type: UPDATE_SHIPMENT_STATUS,
//   payload,
// });

export const addShipment = (shipment: Shipment): ActionTypes => ({
    type: ADD_SHIPMENT,
    payload: shipment,
  });

export const updateShipmentStatus = (payload: { id: number; status: string }): ActionTypes => ({
    type: UPDATE_SHIPMENT_STATUS,
    payload,
  });

export const removeShipment = (id: number): RemoveShipmentAction => ({
  type: REMOVE_SHIPMENT,
  payload: id,
});

export const addSupplier = (supplier: Supplier): AddSupplierAction => ({
  type: ADD_SUPPLIER,
  payload: supplier,
});

export const updateSupplier = (supplier: Supplier): UpdateSupplierAction => ({
  type: UPDATE_SUPPLIER,
  payload: supplier,
});

export const removeSupplier = (id: number): RemoveSupplierAction => ({
  type: REMOVE_SUPPLIER,
  payload: id,
});
