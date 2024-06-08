import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear); 
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  

    return (
        <Card className="expenses">
          <ExpenseFilter    
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
          />
          <ExpenseChart chartData={filteredExpenses}/>

        <ExpenseList items={filteredExpenses}/>
    </Card> 
    )
}

export default Expenses;