import { Link } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import useFetchData from './useFetchData';

const Expenses = () => {
        const {data: expenses, isPending, error } = useFetchData('http://localhost:8000/expenses')


    return ( 
        
        <div className="expenses">
            <h2>Expenses</h2>
            <div className="expenses-display">
                <Link to="/add-expense">
                    <button>Add Expenses</button>
                </Link>
                { error && <div>{ error }</div>}
                { isPending && <div>Loading...</div> }
                { expenses && <ExpenseList expenses={expenses}/> }
            </div>
        </div>
     );
}
 
export default Expenses;