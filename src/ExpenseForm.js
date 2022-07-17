import React, {useState} from 'react'
import New_expense from './NewExpense'


function Expense_form(props){
const [expenseTitle,setTitle]= useState('')
const [expenseAmount,setAmount]= useState('')
const [expenseDate,setDate]= useState('')

const titleHandler = (event) =>{
        setTitle(event.target.value)
        // console.log(setTitle)
}
const AmountHandler = (event) =>{
        setAmount(event.target.value)
}
const DateHandler = (event) =>{
        setDate(event.target.value)
}

const submitHandler =(event)=>{
    event.preventDefault()

    const expenseData = {
        title: expenseTitle,
        amount: expenseAmount,
        date : new Date(expenseDate)
    }
    // console.log(expeneseData)
    // Here we transfer this Expensedata to the parent which is NewExpense.js by props add to the onsubmit event
    props.onSaveDataForm(expenseData)

    setTitle('')
    setAmount('')
    setDate('')


   
}

    return(
        <form onSubmit={submitHandler}>
            <div className='expense-form'>
              <div className='expense-item'>
                <label>Title</label>
                <input 
                type= 'text' 
                onChange={titleHandler}
                value={expenseTitle}
                />
             </div>  
             <div className='expense-amount'>
                <label>amount</label>
                <input 
                type= 'number' 
                onChange={AmountHandler}
                value={expenseAmount}
                />
             </div> 
             <div className='expense-date'>
                <label>date</label>
                <input 
                type= 'date'
                onChange={DateHandler}
                value={expenseDate}
                />
             </div>
             <div className='submit-btn'>
                <button type='submit'>
                    Submit
                </button>
            </div> 
            </div>
        </form>    
    )
}
export default Expense_form