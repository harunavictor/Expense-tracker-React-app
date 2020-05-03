import React, {useContext} from 'react'
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
   const amounts = transactions.map((transaction) => transaction.amount);
   const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="container">
      <h6>Your Balance</h6>
      <h4>{total}</h4>
    </div>
  );
}
export default  Balance