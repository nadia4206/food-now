
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import HomePage from './components/HomePage'
import RestaurantCards from './components/RestaurantCards';
import Restaurant from './components/Restaurant'
import RestaurantItems from './components/RestaurantItems';
import Cart from './components/Cart'
import OrderHistory from './components/OrderHistory'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/welcome">
          <Welcome />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/user/:id/profile">
          <Profile />
        </Route>

        <Route exact path="/restaurants">
          <HomePage />
        </Route>

      </Routes>
    </div>
  )
}

export default App;
