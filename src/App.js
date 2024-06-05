import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";


function App() {
  
  const [expenses, setExpenses] = useState( [
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
  ])


  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [ expense, ...prevExpenses]
    });
  };

  return (
  <Card> 
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses expenses={expenses}/>
  </Card>
);
}

export default App;
