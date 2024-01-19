import { useContext } from "react";
import { ShopContext } from "../App";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  const cartIsEmpty = cartItems.length > 0 ? false : true;

  return (
    <div className="cart-section">
      <h2>My cart</h2>
      <div className="cart-container">
        {!cartIsEmpty ? (
          cartItems.map((item) => (
            <>
              <img src={item.image} alt={item.title} key={item.id} />
              <p key={item.id}>{item.title}</p>
              <p key={item.id}>{item.price}</p>
            </>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
}
