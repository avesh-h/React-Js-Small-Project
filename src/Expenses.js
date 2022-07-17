import React from 'react'
import Expense_item from './ExpenseItem'

function Expenses(props) {
  return (
    <div>
      {/* Here we Displaying all expense items statically */}
      
        {/* We get this data from App.js via props */}

       {/* <Expense_item 
      date = {props.items[0].date}
      title = {props.items[0].title}
      amount = {props.items[0].amount}
      />  
      
      <Expense_item
      date = {props.items[1].date}
      title = {props.items[1].title}
      amount = {props.items[1].amount}
      />

      <Expense_item 
      date = {props.items[2].date}
      title = {props.items[2].title}
      amount = {props.items[2].amount}
      /> */}

  {/* Here we Displaying all Expense Items Dynamically */}

      {props.items.map((expense)=>{
        return (
        <Expense_item 
        date = {expense.date}
        title = {expense.title}
        amount = {expense.amount}
        />
        )})}
    </div>
  )
}

export default Expenses
