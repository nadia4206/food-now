import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';


function EditRestaurantForm ({onUpdatedRestaurant}) {

    const { id } = useParams()

    console.log(id)


    let history = useHistory();

    const [ formData, setFormData ] = useState({
        name: "",
        address: "",
        image_url: "",
        rating: ""
    })

    useEffect(() => {
        fetch(`/restaurants/${id}`)
        .then(res => res.json())
        .then(restaurants => setFormData(restaurants));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/restaurants/${id}`, {
          method: 'PATCH',
          headers: {
           'Content-Type': 'application/json',
            Accept: 'application/json',
           },
             body: JSON.stringify(formData),
         })
         .then(res => res.json())
         .then((updatedRestaurant) => {
             onUpdatedRestaurant(updatedRestaurant)
         })
         history.push("/home")
     }



    return(
        <div>
            <h2>Edit Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <label>Restaurant Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Restaurant Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Restaurant Address"
                    value={formData.address}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="image_url"
                    placeholder="Restaurant Image"
                    value={formData.image_url}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="rating"
                    placeholder="Restaurant Rating"
                    value={formData.rating}
                    onChange={handleChange}
                />
                <button>Update Restaurant</button>
            </form>
        </div>
    )
}


export default EditRestaurantForm;