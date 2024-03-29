import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/header.css";
import { ShopContext } from "../ContextProvider";
import { useContext } from "react";

export default function Header() {
  const { getNumberOfProducts, getSubtotal } = useContext(ShopContext);

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
            <Link className="nav-link" to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="cart-icon-container">
        <span className="cart-products">{getNumberOfProducts()}</span>
        <Link className="cart-link" to="cart">
          <ShoppingCartIcon style={{ fontSize: "2rem" }} />
        </Link>
        <span className="cart-price">{`$${getSubtotal().toFixed(2)}`}</span>
      </div>
    </header>
  );
}
