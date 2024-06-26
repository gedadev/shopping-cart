import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const ShopContext = createContext();

export default function ContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [productList, setProductList] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProductList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const handleResize = () => setIsMobile(window.innerWidth <= 800);

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
        productList,
        isMobile,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node,
};
