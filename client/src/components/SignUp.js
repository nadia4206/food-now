import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function SignUp ({ updateUser, updateErrors}) {

    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        username: "",
        password: ""
    })

    const [ errors, setErrors ] = useState([])

    const history = useHistory();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        const user = {...formData };
        fetch('/customers', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    history.push('/home')
                    updateUser(user)
                    updateErrors()
                });
            } else {
                res.json().then(json => {
                    setErrors(json.errors)
                })
            }
        })
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <div>
                        <button
                            type="submit"
                            >Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp