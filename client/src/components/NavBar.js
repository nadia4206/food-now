import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar({currentUser, handleLogout}) {
    return (
    <header>
        <div className="logo">
            <h1>Bites for Later</h1>
        <NavLink to="/home">Home</NavLink>
        <NavLink
            to='/cart'
            exact>
                Cart
        </NavLink>
        <NavLink
            to='/signup'
            exact>Signup
        </NavLink>
        {currentUser ? 
                        <>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                        : 
                        <NavLink
                        to='/login'
                        exact
                        >
                            <p>Log In</p>
                        </NavLink>}
        </div>
    </header>
    );
}

export default Navbar;