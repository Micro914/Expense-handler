import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    let filteredExpenses = props.array.filter(year => year.date.getFullYear().toString() === filteredYear)
    

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
            {/* {filteredExpenses.length !== 0 ?
                (filteredExpenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />
                )))
                : (expensesContent)} */}

        </Card>
    )
}

export default Expenses
