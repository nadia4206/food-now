import { Link } from 'react-router-dom';


function Login () {

    return (
        <div>
            <div>
                <h1>FOOD NOW</h1>
            </div>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <form>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
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