import React from 'react'
import "./ExpenseItem.css";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

const ExpenseItem = (props) => {
    const month = months[props.date.getMonth()];
    const year = props.date.getFullYear();
    const date = props.date.getDate();
    
    return(
    
        <div key={props.id} className="expense-item">
        {/* <div >{props.date.toISOString()}</div> */}
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{date}</div>
        </div>
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <div className="expense-item__location">{props.location}</div>
        </div>
        </div>
    
    )
}

export default ExpenseItem