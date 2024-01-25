import "./styles/App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
  getProductQuantity: () => {},
  getNumberOfProducts: () => {},
  getSubtotal: () => {},
});

function App() {
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
    <>
      <ShopContext.Provider
        value={{
          cartItems,
          addToCart,
          getProductQuantity,
          getNumberOfProducts,
          getSubtotal,
        }}
      >
        <Header />
        <Outlet />
      </ShopContext.Provider>
    </>
  );
}

export default App;
