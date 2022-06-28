import Navbar from './Navbar';
import Users from './Users';
import Expenses from './Expenses';
import AddUser from './AddUser';
import AddExpense from './AddExpense';
import Settings from './Settings';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Users />
              <Expenses />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/add-user">
              <AddUser />
            </Route>
            <Route path="/add-expense">
              <AddExpense />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
