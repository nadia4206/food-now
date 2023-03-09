import { Link } from "react-router-dom";


function Navbar() {
    return (
    <header>
        <div className="logo">
        <h1>Food now</h1>
        </div>
        <nav>
        <Link to="/">Home</Link>
        </nav>
    </header>
    );
}

export default Navbar;