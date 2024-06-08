import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

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

        <ExpenseList items={filteredExpenses}/>
    </Card> 
    )
}

export default Expenses;