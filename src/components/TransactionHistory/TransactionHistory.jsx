import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem"
import s from "./TransactionHistory.module.css"

const TransactionHistory = ( { items } ) => {
  return (
    <table className={s.transaction}> 
  <thead>
    <tr className={s.table}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(item => (
        <tr className={s.line}
        key={item.id}>
          <TransactionHistoryItem 
            type={item.type} 
            amount={item.amount} 
            currency={item.currency} 
          />
        </tr>
      ))}
    </tbody>
</table>
  )
}

export default TransactionHistory
