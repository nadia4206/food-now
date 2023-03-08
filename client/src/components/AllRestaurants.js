import React from 'react';
import Restaurant from './Restaurant'

function AllRestaurants({allRestaurants, handleViewMenu}) {
    return (
        <div className='flex'>
            <div className='flex flex-wrap'>
                {allRestaurants.map((restaurant) => (
                <Restaurant 
                    handleViewMenu={handleViewMenu}
                    key={restaurant.name}
                    restaurant={restaurant}
                />))}
            </div>
        </div>
    );
}

export default AllRestaurants