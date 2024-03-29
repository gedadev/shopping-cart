import { useContext } from "react";
import { ShopContext } from "../ContextProvider";
import CartItem from "./CartItem";
import "../styles/cart.css";

export default function Cart() {
  const { cartItems, getSubtotal } = useContext(ShopContext);

  const cartIsEmpty = cartItems.length > 0 ? false : true;

  return (
    <div className="cart-section">
      <div className="cart-container">
        <h2>My cart</h2>
        {!cartIsEmpty ? (
          cartItems.map((item) => (
            <>
              <CartItem item={item} key={item.id} />
            </>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="checkout-container">
        <div className="checkout">
          <p>Subtotal: $ {getSubtotal().toFixed(2)} </p>
          <p>Discounts: $ 0</p>
          <p>Shipping: $ 0</p>
          <p>Taxes: $ 0</p>
          <p>Total:</p>
        </div>
        <button type="button" className="pay-button">
          Confirm your order
        </button>
      </div>
    </div>
  );
}
