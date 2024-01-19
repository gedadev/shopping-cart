import PropTypes from "prop-types";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductCard({ product, addToCart }) {
  const shortenedTitle = (title, length) =>
    title.length > length ? title.slice(0, length) + "..." : title;

  const ratingStarts = (rate) => "⭐".repeat(Math.round(rate));

  return (
    <div className="product-card">
      <div className="img-container">
        <img src={product.image} className="product-image" />
      </div>
      <div className="product-info">
        <p>{shortenedTitle(product.title, 40)}</p>
        <p>${product.price}</p>
        <div className="rating-stars">{ratingStarts(product.rating.rate)}</div>
      </div>
      <button
        type="button"
        className="add-item-button"
        onClick={() => addToCart(product)}
      >
        <AddShoppingCartIcon />
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
};
