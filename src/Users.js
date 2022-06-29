import { Link } from 'react-router-dom';
import { useState } from 'react';
import UserList from './UserList';

const Users = () => {
//Array of sample users
const [users, setUsers] = useState([
    { name: 'Name 1', balance: '0', id: 1 },
    { name: 'Name 2', balance: '20', id: 2 },
    { name: 'Name 3', balance: '-40', id: 3 }
]);

    return ( 
        <div className="users">
            <h2>Users</h2>
            <div className="users-display">
                <Link to="/add-user">
                    <button>Add User</button>
                </Link>
                <UserList users={users}/>
            </div>
        </div>
     );
}
 
export default Users;