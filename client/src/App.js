
import {Route, Routes} from 'react-router-dom';
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

  return (
    <div>
        <Routes>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/settings">
            <Profile />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>
        </Routes>
    </div>
  )
}

export default App;
