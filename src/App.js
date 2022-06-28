import Navbar from './Navbar';
import Users from './Users';
import Expenses from './Expenses';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main">
          <Switch>
            <Route path="/">
              <Users />
              <Expenses />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
