//export{};

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { inventoryReducer } from './inventoryReducer';
import { shipmentsReducer } from './shipmentsReducer';
import { suppliersReducer } from './suppliersReducer';

const rootReducer = combineReducers({
  inventory: inventoryReducer,
  shipments: shipmentsReducer,
  suppliers: suppliersReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
