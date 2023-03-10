import { useState } from "react"

const initialState = {
    name: "",
    address: "",
    image_url: "",
    rating: ""
  }

function AddRestaurantForm({ onAddRestaurant }) {
    const [formData, setFormData] = useState(initialState)

    function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        })
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        fetch("/restaurants", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((r) => r.json())
          .then((newRestaurant) => {
            setFormData(initialState)
            onAddRestaurant(newRestaurant)
          })
      }

    return (
    
        <div>
          <h2>Add New Restaurant</h2>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    <label htmlFor="address">Address: </label>
                        <input
                            type="text"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    <label htmlFor="image">Image: </label>
                        <input
                            type="text"
                            id="image_url"
                            value={formData.image_url}
                            onChange={handleChange}
                        />
                    <label htmlFor="rating">Rating: </label>
                    <input
                        type="number"
                        id="rating"
                        // max="5"
                        value={formData.rating}
                        onChange={handleChange}
                    />
                    <button type="submit">Add Restaurant</button>
                </form>
            </div>
        )
    }

export default AddRestaurantForm
