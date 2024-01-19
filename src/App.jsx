import "./styles/App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <ShopContext.Provider value={{ cartItems, addToCart }}>
        <Header />
        <Outlet />
      </ShopContext.Provider>
    </>
  );
}

export default App;
