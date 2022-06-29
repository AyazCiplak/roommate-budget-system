const UserList = (props) => {

    const users = props.users;

    return ( 
        <div className="user-list">
            {users.map((user) => (
                    <div className="user-preview" key={user.id}>
                        <button>
                        <h3>{user.name}</h3>
                        <p>{user.balance}</p>
                        </button>  
                    </div>
                ))}
        </div>
     );
}
 
export default UserList;