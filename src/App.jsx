import "./styles/App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
  getProductQuantity: () => {},
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

  return (
    <>
      <ShopContext.Provider
        value={{ cartItems, addToCart, getProductQuantity }}
      >
        <Header />
        <Outlet />
      </ShopContext.Provider>
    </>
  );
}

export default App;
