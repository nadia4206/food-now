import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantItems from './RestaurantItems'

function Restaurant() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
    fetch("/restaurants")
        .then((r) => r.json())
        .then(setRestaurants);
    }, []);

    function handleDelete(id) {
        fetch(`/restaurants/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setRestaurants((restaurants) =>
              restaurants.filter((restaurant) => restaurant.id !== id)
            );
          }
        });
      }
    

    return (
    <section className="container">
        {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="card">
            <Link to={`/restaurants/${restaurant.id}`}>
            <h2>
            {restaurant.name}
            {/* <RestaurantItems /> */}
            </h2>
            <p>Address: {restaurant.address}</p>
            <img src={restaurant.image_url}/>
            </Link>
            <button onClick={() => handleDelete(restaurant.id)}>Delete</button>
        </div>
        ))}
    </section>
    );
}

export default Restaurant;
