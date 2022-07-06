import { Link } from "react-router-dom";

const ExpenseList = (props) => {
    
    const expenses = props.expenses;
    
    return ( 
    <div className="expense-list">
        {expenses.map((expense) => (
                <div className="expense-preview" key={expense.id}>
                    <Link to={`/expenses/${ expense.id }`}>
                        <button>
                        <h3>{expense.title}</h3>
                        <h4>{expense.cost}</h4>
                        </button>  
                    </Link>
                </div>
            ))}
    </div> 
     );
}
 
export default ExpenseList;