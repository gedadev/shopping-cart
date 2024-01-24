import PropTypes from "prop-types";

export default function QuantitySelector({ quantity = 0 }) {
  return (
    <div className="quantity-selector">
      <span>-</span>
      <input type="text" value={quantity} />
      <span>+</span>
    </div>
  );
}

QuantitySelector.propTypes = {
  id: PropTypes.number,
  quantity: PropTypes.number,
};
