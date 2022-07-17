import React,{useState} from 'react';
import './App.css';
import Expenses from './Expenses';
import New_expense from './NewExpense';


const Dummy_Expenses = [
{
title: 'Car Insurance', 
amount: 295 ,
date : new Date(2021 ,2, 3)
},

{
title: 'Groceries', 
amount: 595 ,
date : new Date(2021 ,5, 5) 
},

{
title: 'Bills', 
amount: 2976 ,
date : new Date(2021 ,12, 20)
}

]

function App() {

  const [expenses,setExpenses]=useState(Dummy_Expenses)

const addExpense = (addingExpense) =>{
  setExpenses((previousState)=>{
    return (
      [addingExpense,...previousState]
    )
  })
    
  }
  // console.log(getExpenseData)


  return (
    <div className="App">

    {/* Add Expense Mini project */}
    <New_expense onAddExpense = {addExpense}/>
    {/* Here we transfer upper object to the child component bt props with (items) prop name*/}
      <Expenses  items={expenses}/>

   

    </div>
  );
 
}

export default App;
