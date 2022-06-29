const ExpenseList = (props) => {
    
    const expenses = props.expenses;
    
    return ( 
    <div className="expense-list">
        {expenses.map((expense) => (
                <div className="expense-preview" key={expense.id}>
                    <button>
                    <h3>{expense.title}</h3>
                    <p>{expense.description}</p>
                    <h4>{expense.cost}</h4>
                    </button>  
                </div>
            ))}
    </div> 
     );
}
 
export default ExpenseList;