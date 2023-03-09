import React from 'react';
import Restaurant from './Restaurant'

function AllRestaurants({allRestaurants}) {
    console.log("AllRestaurants")
    return (
        <div className='flex'>
            <div className='flex flex-wrap'>
                {allRestaurants.map((restaurant) => (
                <Restaurant
                    key={restaurant.name}
                    restaurant={restaurant}
                />))}
            </div>
        </div>
    );
}

export default AllRestaurants