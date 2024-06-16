import React from 'react';
import './App.css';
import Inventory from './components/Inventory';
import Shipments from './components/Shipments';
import Suppliers from './components/Suppliers';


const App: React.FC = () => {
  return (
    <div>
      <h1>Supply Chain Management Application</h1>
      <Inventory />
      <Shipments />
      <Suppliers />
    </div>
  );
}

export default App;
