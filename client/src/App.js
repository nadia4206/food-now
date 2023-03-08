
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

function App() {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [restaurantMenu, setRestaurantMenu] = useState([])
  // const history = useHistory()
  
  useEffect(() => {
    fetch("/restaurants")
    .then(resp => resp.json())
    .then(data => setAllRestaurants(data))
  },[])
  
  function handleViewMenu (restaurant) {
    const { name, address, image_url, id } = restaurant
    fetch(`/restaurants/${id}/items`)
      .then(resp => resp.json())
      .then(data => setRestaurantMenu(data))
      // history.push('/restaurant-menu')
    }

  return (
    <div>
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
            <HomePage handleViewMenu={handleViewMenu} allRestaurants={allRestaurants}/>
          </Route>

          <Route path="/restaurant-menu">
            <RestaurantItems />
          </Route>
        </Switch>
    </div>
  )
}

export default App;
