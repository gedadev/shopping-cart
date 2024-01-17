import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="branding">GedaShop</h1>
      <nav className="navbar">
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="products">
              Products
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Link className="cart-link" to="cart">
        <ShoppingCartIcon style={{ fontSize: "2rem" }} />
      </Link>
    </header>
  );
}
