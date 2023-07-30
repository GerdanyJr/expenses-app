import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react';

const NewExpense = (props) => {
    const [isActive, setIsActive] = useState(false);

    const handleAddButtonClick = () => {
        setIsActive(true);
    }

    const handleCancelbuttonClick = () => {
        setIsActive(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsActive(false);
    }


    return (
        <div className="new-expense">
            {isActive ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelButtonClickHandler={handleCancelbuttonClick}/> :
                <button onClick={handleAddButtonClick}>Add new Expense</button>}
        </div>
    )
};

export default NewExpense;