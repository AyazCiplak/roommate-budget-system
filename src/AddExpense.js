import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddExpense = () => {
    const [title, setTitle] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const expense = { title, cost, description };

        fetch('http://localhost:8000/expenses', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(expense)
        }).then(() => {
            console.log("New expense added");
        })
    }

    return ( 
        <div className="addExpense">
            <h3>Add Expense</h3>
            <form onSubmit={handleSubmit}>
                <label>Expense Title</label>
                <input
                type="text"
                required
                value={ title }
                onChange={ (e) => setTitle(e.target.value) }
                />
                <label>Expense Value</label>
                <input
                type="text"
                required
                value={ cost }
                onChange={ (e) => setCost(e.target.value) }
                />
                <label>Expense Description</label>
                <textarea
                value={ description }
                onChange={ (e) => setDescription(e.target.value)}
                />
                {
                    //In future, add <select /> div to select user to pay
                }
            
                <button>Add Expense</button>
            </form>
            
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
     );
}
 
export default AddExpense;