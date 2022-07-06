import { Link } from 'react-router-dom';
import { useState } from 'react';
import UserList from './UserList';

const Users = () => {

    //Array of sample users (not linked to database)
    const [users, setUsers] = useState([
        { name: 'User 1', balance: '350', id: 1 },
        { name: 'User 2', balance: '2000', id: 2 },
        { name: 'User 3', balance: '1200',  id: 3 }
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