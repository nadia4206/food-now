import React, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom';

function Login ({updateUser}) {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    
    const [errors, setErrors] = useState([])
    const {email, password} = formData
    const history = useHistory()
    
    function onSubmit(e){
        e.preventDefault()
        const user = {
            email,
            password
        }
        // Logs in user
        fetch('/login',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(user => {
                    updateUser(user)
                    history.push(`/`)
                })
            } else {
                resp.json().then(json => setErrors(json.errors))
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
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
                        <button
                            type="submit"
                            >Login
                        </button>
                    </div>
                </form>
                {errors? <div>{errors}</div>:null}
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