import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput]= useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const changeHandler = (e, name) => {
        if (name === 'title') {
            setEnteredTitle(e.target.value)
            ////Not so good way of doing it
            // setUserInput({
            //     ...userInput,
            //     enteredTitle: e.target.value
            // })
            ////Better way
            // setUserInput((prevState) => {
            //     return {...prevState, enteredTitle:e.target.value};
            // })
        }
        else if (name === 'amount') {
            setEnteredAmount(e.target.value)
            ////Not so good way of doing it
            // setUserInput({
            //     ...userInput,
            //     enteredAmount: e.target.value
            // })
            ////Better way
            // setUserInput((prevState) => {
            //     return {...prevState, enteredAmount:e.target.value};
            // })
        }
        else if (name === 'date') {
            setEnteredDate(e.target.value)
            ////Not so good way of doing it
            // setUserInput({
            //     ...userInput,
            //     enteredDate: e.target.value
            // })
            ////Better way
            // setUserInput((prevState) => {
            //     return {...prevState, enteredDate:e.target.value};
            // })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredDateExtraDay = new Date(enteredDate);
        enteredDateExtraDay.setDate(enteredDateExtraDay.getDate() + 1);
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: enteredDateExtraDay
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label htmlFor="">Title</label>
                        <input
                            type="text"
                            value={enteredTitle}
                            onChange={(e, name = 'title') => changeHandler(e, name)} />
                    </div>
                    <div className='new-expense__control'>
                        <label htmlFor="">Amount</label>
                        <input
                            type="number"
                            value={enteredAmount}
                            onChange={(e, name = 'amount') => changeHandler(e, name)}
                            min='0.01'
                            step='0.01' />
                    </div>
                    <div className='new-expense__control'>
                        <label htmlFor="">Date</label>
                        <input
                            type="date"
                            value={enteredDate}
                            onChange={(e, name = 'date') => changeHandler(e, name)}
                            min='2019-01-01'
                            max='2022-12-31' />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </>
    )
}

export default ExpenseForm
