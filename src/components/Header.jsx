import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/header.css";
import { ShopContext } from "../ContextProvider";
import { useContext, useState } from "react";
import Navbar from "./navbar";

export default function Header() {
  const { getNumberOfProducts, getSubtotal, isMobile } =
    useContext(ShopContext);
  const [menuActive, setMenuActive] = useState(false);

  const activateMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      {isMobile ? (
        <>
          <div className="nav-menu" onClick={activateMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          {menuActive && (
            <div className="mobile-nav" onClick={activateMenu}>
              <Navbar />
            </div>
          )}
        </>
      ) : (
        <>
          <h1 className="branding">GedaShop</h1>
          <Navbar />
        </>
      )}
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
