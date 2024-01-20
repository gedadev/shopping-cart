import PropTypes from "prop-types";

export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} key={item.id} />
      <div className="item-info">
        <p key={item.id}>{item.title}</p>
        <p key={item.id}>$ {item.price}</p>
        <div className="quantity-selector">
          <span>-</span>
          <input type="text" name="" id="" />
          <span>+</span>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};
