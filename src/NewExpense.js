import React from 'react'
import Expense_form from './ExpenseForm'


function New_expense(props){

    // Here is new object
    const SubmitdataHandler = (getExpenseData) =>{
        const expenseData={
            ...getExpenseData
        }
        // console.log(expenseData)
        // Here also we get data from the child component through props
        props.onAddExpense(getExpenseData)
    }

    return(
        <div className="new-expense">
            {/* Here we get expense data from child component and add in new object */}
            <Expense_form onSaveDataForm={SubmitdataHandler}/> 
        </div>
    )
}

export default New_expense