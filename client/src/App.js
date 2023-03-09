
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import HomePage from './components/HomePage'
import Cart from './components/Cart'
import OrderHistory from './components/OrderHistory'
import { useState, useEffect } from 'react';
import RestaurantItems from './components/RestaurantItems';
import Restaurant from './components/Restaurant';
import Navbar from './components/NavBar';

function App() {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [restaurantMenu, setRestaurantMenu] = useState([])
  // const history = useHistory()
  
  useEffect(() => {
    fetch("/restaurants")
    .then(resp => resp.json())
    .then(data => setAllRestaurants(data))
  },[])
  
  // function handleViewMenu (restaurant) {
  //   const { id } = restaurant
  //   fetch(`/restaurants/${id}/items`)
  //     .then(resp => resp.json())
  //     .then(data => setRestaurantMenu(data))
  //     // history.push('/restaurant-menu')
  //   }

  return (
    <>
      <Navbar />
        <Switch>
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
            <Restaurant />
          </Route>

          <Route exact path="restaurants/:id">
            <RestaurantItems />
          </Route>
        </Switch>
    </>
  )
}

export default App;
