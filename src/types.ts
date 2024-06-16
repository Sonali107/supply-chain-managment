export interface InventoryItem {
    id: number;
    name: string;
    sku: string;
    quantity: number;
    warehouse: string;
  }
  
  export interface Shipment {
    id: number;
    origin: string;
    destination: string;
    status: string;
    estimatedDelivery: string;
  }
  
  export interface Supplier {
    id: number;
    name: string;
    contactPerson: string;
    phone: string;
    email: string;
  }
  