const Users = () => {

    const handleClick = () => {
        console.log("(redirect to add user page)");
    }

    return ( 
        <div className="users">
            <h2>Users</h2>
            <button onClick={handleClick}>Add User</button>
        </div>
     );
}
 
export default Users;