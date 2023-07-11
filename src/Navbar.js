import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
        <div> 
        <Link to="/"> home </Link>
        <Link to="/menu"> menu </Link>
        <Link to="/contact"> contact </Link>
        <Link to="/profile">Profile</Link>
        </div>
    )
}