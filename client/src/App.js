
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Cart from './components/Cart'
import OrderHistory from './components/OrderHistory'
import RestaurantItems from './components/RestaurantItems';
import Restaurant from './components/Restaurant';
import Navbar from './components/NavBar';
import AddRestaurantForm from './components/AddRestaurantForm';

function App() {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [users, setUsers] = useState([])
  const [restaurantMenu, setRestaurantMenu] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [rating, setRating] = useState([])

  const updateUser = (user) => setCurrentUser(user)
  const newUser = (newUser) => {
      setUsers([...users, newUser])
  }
  
  const fetchRestaurants = () => {
    fetch("/restaurants")
    .then(resp => resp.json())
    .then((data) => {
      setAllRestaurants(data)
      setRating(data.rating)
    })
  }

  useEffect(() => {
    fetch("http://localhost:4000/authorized_user")
      .then(resp => {
        if(resp.ok){
          resp.json().then(user => {
            updateUser(user)
            console.log(user)
            fetchRestaurants()
          })
        }
      })
  }, [])

  useEffect(() => {
    fetch("/customers")
      .then(resp => resp.json())
      .then(data => setUsers(data))
}, [])

  function handleAddRestaurant(addedRestaurant) {
    setAllRestaurants((restaurants) => [...restaurants, addedRestaurant])
  }

  function handleUpdateRestaurant(updatedRestaurant) {
    setAllRestaurants((restaurants) =>
    restaurants.map((restaurant) => {
        return restaurant.id === updatedRestaurant.id ? updatedRestaurant : restaurant
      })
    )
  }

  function handleLogout(){
    fetch("/logout", {
      method: 'DELETE'
    })
    .then(setCurrentUser(false))
    .then(window.location.href = '/login')
  }
  
  // function handleViewMenu (restaurant) {
  //   const { id } = restaurant
  //   fetch(`/restaurants/${id}/items`)
  //     .then(resp => resp.json())
  //     .then(data => setRestaurantMenu(data))
  //     // history.push('/restaurant-menu')
  //   }

  return (
    <>
    <Router>
      <Navbar currentUser={currentUser} handleLogout={handleLogout}/>
        <Switch>
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>

          <Route path="/signup">
            <SignUp setCurrentUser={setCurrentUser} newUser={newUser}/>
          </Route>

          <Route path="/settings">
            <Profile />
          </Route>

          <Route path="/home">
            <Restaurant onUpdateRestaurant={handleUpdateRestaurant}/>
            <AddRestaurantForm onAddRestaurant={handleAddRestaurant}/>
          </Route>

          <Route exact path="/restaurants/:id">
            <RestaurantItems />
          </Route>

          <Route exact path='/logout'>
              <p>Logout</p>
            </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
