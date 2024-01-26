import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShopContext = createContext();

export default function ContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, productId) => {
    const cartObject = cartItems.find(({ id }) => id === productId);

    if (cartItems.includes(cartObject)) {
      const update = [...cartItems];
      update[cartItems.indexOf(cartObject)].quantity += 1;
      setCartItems(update);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (productId) => {
    const cartObject = cartItems.find(({ id }) => id === productId);

    if (cartItems.includes(cartObject)) {
      if (cartObject.quantity > 1) {
        const update = [...cartItems];
        update[cartItems.indexOf(cartObject)].quantity -= 1;
        setCartItems(update);
      } else {
        const update = cartItems
          .slice(0, cartItems.indexOf(cartObject))
          .concat(cartItems.slice(cartItems.indexOf(cartObject) + 1));
        setCartItems(update);
      }
    }
  };

  const getProductQuantity = (productId) => {
    const cartObject = cartItems.find(({ id }) => id === productId);

    if (cartItems.includes(cartObject)) return cartObject.quantity;
  };

  const getNumberOfProducts = () =>
    cartItems.reduce(
      (numberOfProducts, current) => numberOfProducts + current.quantity,
      0
    );

  const getSubtotal = () =>
    cartItems.reduce(
      (subtotal, current) => subtotal + current.price * current.quantity,
      0
    );

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        getProductQuantity,
        getNumberOfProducts,
        getSubtotal,
        removeItem,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node,
};
