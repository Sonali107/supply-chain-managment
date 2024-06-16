import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { Shipment } from '../types';
import { addShipment, updateShipmentStatus } from '../redux/actions';
import { ActionTypes, ADD_SHIPMENT } from '../redux/actions';

const Shipments: React.FC = () => {
  const shipments = useSelector((state: RootState) => state.shipments);
  const dispatch = useDispatch();

  const handleAddShipment = () => {
    const newShipment: Shipment = {
      id: Math.floor(Math.random() * 1000), // Generate a unique ID
      origin: 'New Origin',
      destination: 'New Destination',
      status: 'In Transit',
      estimatedDelivery: '2024-06-20', // Default estimated delivery date
    };
    dispatch(addShipment(newShipment));
  };

  const handleUpdateShipmentStatus = (id: number, status: string) => {
    dispatch(updateShipmentStatus({ id, status }));
  };

  return (
    <div>
      <h2>Shipments</h2>
      <button onClick={handleAddShipment}>Add Shipment</button>
      <ul>
        {shipments.map((shipment : any) => (
          <li key={shipment.id}>
            ID: {shipment.id} - Origin: {shipment.origin} - Destination: {shipment.destination} - Status: {shipment.status} - Estimated Delivery: {shipment.estimatedDelivery}
            <button onClick={() => handleUpdateShipmentStatus(shipment.id, 'Delivered')}>Mark as Delivered</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shipments;
