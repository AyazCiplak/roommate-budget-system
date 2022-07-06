import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetchData from "./useFetchData";

const ExpenseDetails = () => {

    const { id } = useParams();
    const { data: expense, error, isPending } = useFetchData('http://localhost:8000/expenses/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/expenses/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push("/");
        })
    };

    return ( 
        <div className="expense-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { expense && (
                <div>
                    <h2>{ expense.title }</h2>
                    <h1>{ expense.cost } $</h1>
                    <p>{ expense.description }</p>
                    <button onClick={handleClick}>Delete Expense</button>
                </div>
            )}
            
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>

     );
}
 
export default ExpenseDetails;