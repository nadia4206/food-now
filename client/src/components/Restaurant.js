import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantItems from './RestaurantItems'

function Restaurant() {

  // const { id } = useParams();


  const initialPatch = {
    id: "",
    name: "",
    address: "",
    image_url: "",
    rating: ""
  }


    const [restaurants, setRestaurants] = useState([]);
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [patchState, setPatchState] = useState(initialPatch)

    console.log(restaurants)

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


    function handleRating(id, index) {
      setPatchState({...patchState, rating: index})
      fetch(`/restaurants/${id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(patchState)
      })
      .then(res => res.json())
      .then(data => console.log(data))
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
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                  <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? "on" : "off"}
                    onClick={() => {setRating(index)}}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                    >
                    <span className="star">&#9733;</span>
                  </button>
        );
      })}
    
    </div>
        </div>
        ))}
    </section>
    );
}

export default Restaurant;
