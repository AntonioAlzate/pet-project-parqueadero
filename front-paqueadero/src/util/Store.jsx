
import React, {createContext, useReducer} from 'react';
import Reducer from './Reducer';

const initialState = {
    vehiculo: { list: [], item: {} },
    tarifa: { list: [], item: {}}
  };

const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>
      {children}
  </Store.Provider>
  
  }

  export default Store;
