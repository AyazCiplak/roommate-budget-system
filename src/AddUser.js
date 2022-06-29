import { Link } from 'react-router-dom';

const AddUser = () => {
    return ( 
        <div className="addUser">
            <h3>Add User</h3>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
     );
}
 
export default AddUser;