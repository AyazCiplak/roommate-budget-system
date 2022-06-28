const Expenses = () => {
    
    const handleClick = () => {
        console.log("(redirect to add expense page)");
    }
    
    return ( 
        <div className="expenses">
            <h2>Expenses</h2>
            <button onClick={handleClick}>Add Expenses</button>
        </div>
     );
}
 
export default Expenses;