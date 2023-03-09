
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import HomePage from './components/HomePage'
import RestaurantCards from './components/RestaurantCards';
import Restaurant from './components/Restaurant'
import RestaurantItems from './components/RestaurantItems';
import Cart from './components/Cart'
import OrderHistory from './components/OrderHistory'

function App() {

  const [ customer, setCustomer ] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/current_customer").then((r) => {
      if (r.ok) {
        r.json().then((customer) => setCustomer(customer));
      }
    });
  }, []);

  return (
    <div>
        <Switch>
          <Route path="/login">
            <Login
              setCustomer={setCustomer}
            />
          </Route>

          <Route path="/signup">
            <SignUp
            />
          </Route>

          <Route path="/settings">
            <Profile />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>
        </Switch>
    </div>
  )
}

export default App;
