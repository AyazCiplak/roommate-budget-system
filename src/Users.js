import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserList from './UserList';

const Users = () => {

const [users, setUsers] = useState(null);

useEffect(() => {
    fetch('http://localhost:8000/users')
    .then(res => {
        return res.json();
    })
    .then(data => {
        setUsers(data);
    })
}, [])

    return ( 
        <div className="users">
            <h2>Users</h2>
            <div className="users-display">
                <Link to="/add-user">
                    <button>Add User</button>
                </Link>
                {users && <UserList users={users}/>}
            </div>
        </div>
     );
}
 
export default Users;