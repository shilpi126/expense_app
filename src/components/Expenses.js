import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

const Expenses = (props) => {
    return (
        <Card className="expenses">
         { 
        props.expenses.map((expense, index) => {
          return (
          <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
          location={expense.location}
          ></ExpenseItem>
        )
      })
    }
    </Card> 
    )
}

export default Expenses;