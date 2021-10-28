
import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkout from './Checkout';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">

            <Home />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
            <h1>Im checkout</h1>
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
