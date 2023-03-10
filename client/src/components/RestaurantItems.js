import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantItems() {
  const [restaurant, setRestaurant] = useState({items:[], name:""});
  const { id } = useParams();
  const [items, setItems] = useState("")

  useEffect(() => {
    // console.log("hello")
    fetch(`/restaurants/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((restaurant) =>
          setRestaurant(restaurant)
        );
      } else {
        r.json().then((err) =>
          // setRestaurant()
          console.log(err)
        );
      }
    });
  }, []);

  function handleAddToCart(item) {
    fetch(`/order_items/${item.id}`)
    .then((r) => r.json())
    .then((data) => console.log(data))
  }


  // if (status === "pending") return <h1>Loading...</h1>;
  // if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <section className="container">
      <div className="card">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.address}</p>
      </div>
      <div className="card">
        <h2>Menu</h2>
        {restaurant.items.map((items) => (
          <div key={items.id}>
            <h3>{items.item_name}</h3>
            <p>
              <em>${items.item_price}</em>
              <img src={items.item_image}/>
              <button onClick={() => handleAddToCart(item)}>Order Here</button>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RestaurantItems;
