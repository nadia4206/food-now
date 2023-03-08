
function Profile () {

    return (
        <div>
        <div>
            <h1>Edit Profile</h1>
            <div>
                <form>
                    <input
                        name="name"
                        type="text"
                        placeholder="customer.name"
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="customer.email"
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="customer.username"
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="customer.password"
                    />
                </form>
                <div>
                    <button
                        type="submit"
                        >Update Profile
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Profile;