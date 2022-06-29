import { Link } from 'react-router-dom';

const AddExpense = () => {
    return ( 
        <div className="addExpense">
            <h3>Add Expense</h3>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
     );
}
 
export default AddExpense;