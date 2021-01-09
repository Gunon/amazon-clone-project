import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Payment from './Payment';
import { loadStripe }from "@stripe/stripe-js";
import { Elements }from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51I7THdIpXPiNoexufnId7y1kRJZRaBM4TwoywftXDE86ZQBJIk36kynw0bfavjLbP0VzPQCFyvZCUYo2e9tisS1H00AmAAeRT5");

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}> {/* Need to place the component which will include the payments inside the elemnets scope that is invoking the stripe promise*/}
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
