import { Link } from 'react-router-dom';

const Settings = () => {
    return ( 
        <div className="settings">
            <h3>Settings</h3>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
     );
}
 
export default Settings;