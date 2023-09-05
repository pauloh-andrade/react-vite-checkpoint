import './menu.css'
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <nav className="menu">
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/products'>Produtos</Link>
        </nav>
    )
}

export default Menu