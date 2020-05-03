import React, { useState,useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
//import { Transaction } from "./Transaction";

const AddTransaction = () => {

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      //this amount: amount or
      amount :+amount
    }; 
    addTransaction(newTransaction)
  }
  const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState(" ");
    const [amount, setAmount] = useState(0);
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
                  <input value={text} onChange={(e)=>setText(e.target.value)}
                      type="text"
                      placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input 
          type="number" value={amount} onChange={(e) => setAmount(e.target.value)}placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
