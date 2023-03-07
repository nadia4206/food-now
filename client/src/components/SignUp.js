
function SignUp () {
    return (
        <div>
            <h1>Sign Up</h1>
            <div>
                <form>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                    />
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
                            >Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp