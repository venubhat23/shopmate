import Logo from "../assets/logo.png"
import {Link, NavLink} from "react-router-dom"
export const Header = () => {
  return (
<header>
    <Link to="/" className="logo">
    <img src={Logo} alt="no kimd" />
    <span>Shopping cart</span>
    </Link>
    <nav className="navigation">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/cart" className="link" >Cart</NavLink>

    </nav>
<Link to="/cart" className="items">
<span>Cart:02</span>

</Link>

</header>
  )
}
