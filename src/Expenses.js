import { Link } from 'react-router-dom';
import { useState } from 'react';
import ExpenseList from './ExpenseList';

const Expenses = () => {
    //Array of sample users
const [expenses, setExpenses] = useState([
    { title: 'Expense 1', description: 'lorem ipsum', cost: '350', id: 1 },
    { title: 'Expense 2', description: '', cost: '200', id: 2 },
    { title: 'Expense 3', description: 'example description', cost: '1200',  id: 3 }
]);

    return ( 
        
        <div className="expenses">
            <h2>Expenses</h2>
            <div className="expenses-display">
                <Link to="/add-expense">
                    <button>Add Expenses</button>
                </Link>
                {
                    //Outputs list of expenses
                }
                <ExpenseList expenses={expenses}/>
            </div>
        </div>
     );
}
 
export default Expenses;