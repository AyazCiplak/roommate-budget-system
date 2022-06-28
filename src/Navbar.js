const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>(Title)</h1>
            <div className="links">
                {
                //Add new link when page is set up
                }
                <a href="/add-user">New User</a>
                <a href="/add-expense">New Expense</a>
                <a href='/settings'>Settings</a>
                <a href="/">Home</a>
            </div>
        </nav>
     );
}
 
export default Navbar;