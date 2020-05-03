import React, { createContext, useReducer } from 'react'
import appReducer from './AppReducer'

//Initial state
const initialState = {
  transactions: [],
};

//createContext
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
     
    //Action
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction(transaction) {
      dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction,
      });
    }


    return (
      <GlobalContext.Provider
        value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
}
