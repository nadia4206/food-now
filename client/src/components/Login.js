import React, {useState} from 'react'
import { Redirect, NavLink } from 'react-router-dom';

function Login ({updateUser}) {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    
    const [errors, setErrors] = useState([])
    // let history = useHistory()
    const {email, password} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    
    function onSubmit(e){
        e.preventDefault()
        const user = {
            email,
            password
        }
        fetch('/login',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(user => {
                    <Redirect to="/home"/>
                    updateUser(user)})
                    // updateErrors()
            } else {
                resp.json().then(json => setErrors(json.errors))
            }
        })
    }

    return (
        <div>
            <div>
                <h1>FOOD NOW</h1>
            </div>
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                    />
                    <div>
                    {/* <NavLink to="/home"> */}
                        <button
                            type="submit"
                            >Login
                        </button>
                    {/* </NavLink> */}
                    </div>
                </form>
                {errors? <div>{errors}</div>:null}
                <div>
                    <NavLink to="/signup">
                        <button
                            type="button"
                            >Sign Up!
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login;