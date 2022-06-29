import { Link } from 'react-router-dom';

const Users = () => {

    return ( 
        <div className="users">
            <h2>Users</h2>
            <Link to="/add-user">
                <button>Add User</button>
            </Link>
        </div>
     );
}
 
export default Users;