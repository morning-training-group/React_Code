 //import ExpenseItem from "./components/ExpenseItem";
 import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  // {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  // {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  // {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  // {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},

  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', 
  amount: 799.49, 
  date: new Date(2021, 2, 12),
 },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },

];

const App = () => {
 const [expenses, setExpenses]= useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      
      
      {/* <ExpenseItem titleName={expense[0].title} 
      amountValue={expense[0].amount}
       date={expense[0].date}>
       </ExpenseItem>
      <ExpenseItem
       titleName={expense[1].title} 
      amountValue={expense[1].amount}
       date={expense[1].date}>
       </ExpenseItem>
      <ExpenseItem 
      titleName={expense[2].title} 
      amountValue={expense[2].amount}
       date={expense[2].date}>
       </ExpenseItem>
      <ExpenseItem
      titleName={expense[3].title} 
      amountValue={expense[3].amount}
       date={expense[3].date}
      ></ExpenseItem> */}
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      
       <Expenses items={expenses}/>
       
    </div>
  );
}

export default App;
