import React from 'react'
import "./ExpenseItem.css";
const ExpenseItem = () => {
    const expenseDate = new Date(2023, 7, 15).toISOString();
    const expenseTitle = "Insurance";
    const expenseAmount = 50;
    const expenseLocation = "Bangalore";

    return(
    <div>
        <div className="expense-item">
        <div >{expenseDate}</div>
        <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
        <div className="expense-item__location">{expenseLocation}</div>
        </div>
        </div>
    </div>
    )
}
export default ExpenseItem