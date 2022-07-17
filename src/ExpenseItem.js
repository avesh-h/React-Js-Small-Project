import React from 'react'
import './ExpenseItem.css'
import Expense_Date from './ExpenseDate'

const Expense_item = (props) =>{

   
    return(
        <div className='expense-item'>
            <div className='main-item'>
               <Expense_Date date={props.date}/>
                <div className='name-item'>
                   {props.title}
                </div>
                <div className='amount-item'>
                   {props.amount}
                </div>
            </div>
        </div>

    )
}
export default Expense_item