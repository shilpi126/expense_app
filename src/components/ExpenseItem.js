import React from 'react'
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';



const ExpenseItem = (props) => {

    return(
    
        <div key={props.id} className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>

        </div>
        </div>
    
    )
}

export default ExpenseItem