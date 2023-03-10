import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function Restaurant({onUpdateRestaurant}) {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
    fetch("/restaurants")
        .then((r) => r.json())
        .then(setRestaurants);
    }, []);

    function handleUpdateRating(id) {
        const newRating = id * 5;
        fetch(`/restaurants/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rating: newRating }),
        })
          .then((r) => r.json())
          .then(onUpdateRestaurant);
      }

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
            <button onClick={() => handleDelete(restaurant.id)}>Delete Restaurant</button>
            <div>
            Rating:{" "}
            <StarRating percentage={restaurant.rating / 5} onClick={handleUpdateRating} />
        </div>
        </div>
        ))}
    </section>
    );
}

export default Restaurant;
