import PropTypes from "prop-types";

export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} key={item.id} />
      <p key={item.id}>{item.title}</p>
      <p key={item.id}>{item.price}</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};
