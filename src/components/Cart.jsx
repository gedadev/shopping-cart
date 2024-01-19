import { useContext } from "react";
import { ShopContext } from "../App";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  const cartIsEmpty = cartItems.length > 0 ? false : true;

  const getSubtotal = cartItems.reduce(
    (subtotal, current) => subtotal + current.price,
    0
  );

  console.log(getSubtotal);

  return (
    <div className="cart-section">
      <h2>My cart</h2>
      <div className="cart-container">
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
          <p>Subtotal: {getSubtotal} </p>
          <p>Discounts: 0</p>
          <p>Shipping: 0</p>
          <p>Taxes: 0</p>
          <p>Total:</p>
        </div>
        <button type="button" className="pay-button">
          Confirm your order
        </button>
      </div>
    </div>
  );
}
