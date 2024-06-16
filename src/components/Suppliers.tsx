import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { Supplier } from '../types';
import { addSupplier, updateSupplier, removeSupplier } from '../redux/actions';

const Suppliers: React.FC = () => {
  const suppliers = useSelector((state: RootState) => state.suppliers);
  const dispatch = useDispatch();

  const handleAddSupplier = () => {
    const newSupplier: Supplier = {
      id: Math.floor(Math.random() * 1000), // Generate a unique ID
      name: 'New Supplier',
      contactPerson: 'New Contact',
      phone: 'New Phone',
      email: 'New Email',
    };
    dispatch(addSupplier(newSupplier));
  };

  const handleUpdateSupplier = (updatedSupplier: Supplier) => {
    dispatch(updateSupplier(updatedSupplier));
  };

  const handleRemoveSupplier = (id: number) => {
    dispatch(removeSupplier(id));
  };

  return (
    <div>
      <h2>Suppliers</h2>
      <button onClick={handleAddSupplier}>Add Supplier</button>
      <ul>
        {suppliers.map((supplier: any) => (
          <li key={supplier.id}>
            Name: {supplier.name} - Contact Person: {supplier.contactPerson} - Phone: {supplier.phone} - Email: {supplier.email}
            <button onClick={() => handleUpdateSupplier({ ...supplier, name: 'Updated Supplier' })}>Update Name</button>
            <button onClick={() => handleRemoveSupplier(supplier.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Suppliers;
