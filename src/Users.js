const Users = () => {

    //Redirect to add user page. User page permits to create new user buttons and add to array
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