
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from './Cart';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />

          </Route>
          <Route path='/signup'>
            <h1>Hi</h1>
          </Route>
          <Route path='/cart'>
            <Cart />


          </Route>


          <Route path='/'>
            <Home />

          </Route>

        </Switch>


      </div>
    </Router>
  );
}

export default App;
