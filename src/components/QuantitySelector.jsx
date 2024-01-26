import PropTypes from "prop-types";
import { ShopContext } from "../ContextProvider";
import { useContext } from "react";

export default function QuantitySelector({ quantity = 0, product }) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="quantity-selector">
      <span>-</span>
      <input type="text" value={quantity} />
      <span onClick={() => addToCart(product, product.id)}>+</span>
    </div>
  );
}

QuantitySelector.propTypes = {
  quantity: PropTypes.number,
  product: PropTypes.object,
};
