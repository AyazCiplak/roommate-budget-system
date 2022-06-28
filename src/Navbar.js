import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>(Title)</h1>
            <div className="links">
                {
                //Add new link when page is set up
                }
                <Link to="/add-user">New User</Link>
                <Link to="/add-expense">New Expense</Link>
                <Link to='/settings'>Settings</Link>
                <Link to="/">Home</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;