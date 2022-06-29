import { Link } from 'react-router-dom';
import { useState } from 'react';

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
                {expenses.map((expense) => (
                    <div className="expense-preview" key={expense.id}>
                        <button>
                        <h3>{expense.title}</h3>
                        <p>{expense.description}</p>
                        <h4>{expense.cost}$</h4>
                        </button>  
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Expenses;