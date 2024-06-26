import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./ExpenseList.css"

const ExpenseList = (props) => {


    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>;
      }
      
  return (
    <ul className='expenses-list'>
        {props.items.map((expense, index) => {
          return (
          <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
          location={expense.location}
          />
        )
      })
    }
    </ul>
  )
}




export default ExpenseList