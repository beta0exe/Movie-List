import {Link} from "react-router-dom";
import "../css/NavBar.css"

function NavBar() {
    return (
        <div className="navBar">
            <div className="brand-logo">
               <h2 className="logo"><Link to={"/"}>Movie List</Link></h2>
            </div>
            <div className="nav-links">
                <Link to="/Favorites">Favorites</Link>
                <Link to="/" >Home</Link>
            </div>
        </div>
    )
}

export default NavBar;