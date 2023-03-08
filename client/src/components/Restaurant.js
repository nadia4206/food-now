import React from 'react';

function Restaurant({restaurant, handleViewMenu}) {
    const {name, address, image_url} = restaurant

    return (
        <div>
            <h4>{name}</h4>
            <p>{address}</p>
            <p>{image_url}</p>
            <button onClick={() => handleViewMenu(restaurant)}>View Menu</button>
        </div>
    )
}

export default Restaurant