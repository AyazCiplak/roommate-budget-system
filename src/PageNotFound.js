import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <div className="page-not-found">
            <h2>Error</h2>
            <p>Page was not found.</p>
            <Link to="/">Home</Link>
        </div>
     );
}
 
export default PageNotFound;