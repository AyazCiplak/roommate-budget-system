import { Link } from 'react-router-dom';

const Expenses = () => {
    
    return ( 
        <div className="expenses">
            <h2>Expenses</h2>
            <Link to="/add-expense">
                <button>Add Expenses</button>
            </Link>
        </div>
     );
}
 
export default Expenses;