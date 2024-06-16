import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { InventoryItem } from '../types';
import { addInventoryItem, updateInventoryItem, removeInventoryItem, ActionTypes } from '../redux/actions';


const Inventory: React.FC = () => {
  const inventory = useSelector((state: RootState) => state.inventory);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem: InventoryItem = {
      id: Math.floor(Math.random() * 1000), // Generate a unique ID (you may want to use a UUID library for this)
      name: 'New Item',
      sku: 'NEW_SKU',
      quantity: 0,
      warehouse: 'New Warehouse',
    };
    dispatch(addInventoryItem(newItem));
  };

  const handleUpdateItem = (updatedItem: InventoryItem) => {
    dispatch(updateInventoryItem(updatedItem));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeInventoryItem(id));
  };

  return (
    <div>
      <h2>Inventory</h2>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {inventory.map((item: any) => (
          <li key={item.id}>
            {item.name} - SKU: {item.sku} - Quantity: {item.quantity} - Warehouse: {item.warehouse}
            <button onClick={() => handleUpdateItem({ ...item, quantity: item.quantity + 1 })}>Increase Quantity</button>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
