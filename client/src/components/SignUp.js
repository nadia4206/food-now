import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function SignUp ({newUser, setCurrentUser}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const formHandler = (e) => {
        e.preventDefault()
        const user = {
            name: name,
            email: email,
            password: password
        }
        fetch('/signup', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            // REROUTE HERE!!
        })
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <div>
                <form onSubmit={formHandler}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <div>
                        <NavLink to="/home">
                        <button
                            type="submit"
                            // onClick={formHandler}
                            >Create Account
                        </button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp