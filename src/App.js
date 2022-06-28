import Navbar from './Navbar';
import Users from './Users';
import Expenses from './Expenses';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Users />
        <Expenses />
      </div>
    </div>
  );
}

export default App;
