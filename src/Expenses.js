import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ExpenseList from './ExpenseList';

const Expenses = () => {

const [expenses, setExpenses] = useState(null);

//Loading message for user data fetch
const [isPending, setIsPending] = useState(true);

useEffect(() => {
    fetch('http://localhost:8000/expenses')
    .then(res => {
        return res.json();
    })
    .then(data => {
        setExpenses(data);
        setIsPending(false);
    })
}, [])

    return ( 
        
        <div className="expenses">
            <h2>Expenses</h2>
            <div className="expenses-display">
                <Link to="/add-expense">
                    <button>Add Expenses</button>
                </Link>
                { isPending && <div>Loading...</div> }
                { expenses && <ExpenseList expenses={expenses}/> }
            </div>
        </div>
     );
}
 
export default Expenses;