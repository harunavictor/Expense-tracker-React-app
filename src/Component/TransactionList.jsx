import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Transaction} from './Transaction'

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  
  return (
    <>
      <h5>History</h5>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction ={transaction}/>
          
        ))}
      </ul>
    </>
  );
}

export default TransactionList
