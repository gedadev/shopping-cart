import PropTypes from "prop-types";
import QuantitySelector from "./QuantitySelector";
import { ShopContext } from "../ContextProvider";
import { useContext } from "react";

export default function CartItem({ item }) {
  const { getProductQuantity } = useContext(ShopContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="item-info">
        <p>{item.title}</p>
        <p>$ {item.price}</p>
        <QuantitySelector
          quantity={getProductQuantity(item.id)}
          product={item}
        />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};
