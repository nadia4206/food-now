import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

function Login ({ setCustomer }) {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((customer) => setCustomer(customer))
            }
        })
    }


    return (
        <div>
            <div>
                <h1>FOOD NOW</h1>
            </div>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        <button
                            type="submit"
                            >Login
                        </button>
                    </div>
                </form>
                <div>
                    <Link to="/signup">
                        <button
                            type="button"
                            >Sign Up!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;