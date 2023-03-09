import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Home() {
  const [{ data: restaurant, error, status }, setRestaurant] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();
//   const [items, setItems] = useState("")

  useEffect(() => {
    fetch(`/restaurants/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((restaurant) =>
          setRestaurant({ data: restaurant, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setRestaurant({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

 
  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <section className="container">
      <div className="card">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.address}</p>
      </div>
      <div className="card">
        <h2>Menu</h2>
        {restaurant.map((items) => (
          <div key={items.id}>
            <h3>{items.name}</h3>
            <p>
              <em>{items.ingredients}</em>
            </p>
          </div>
        ))}
      </div>
      <div className="card">
      </div>
    </section>
  );
}

export default Home;
