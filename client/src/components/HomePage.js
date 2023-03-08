import React from "react";
import AllRestaurants from "./AllRestaurants";

function HomePage ({allRestaurants, handleViewMenu}) {

    return (
        <div>
            <AllRestaurants handleViewMenu={handleViewMenu} allRestaurants={allRestaurants} />
        </div>
    )
}

export default HomePage;