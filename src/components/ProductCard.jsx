import PropTypes from "prop-types";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import QuantitySelector from "./QuantitySelector";
import { ShopContext } from "../ContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { getProductQuantity, addToCart } = useContext(ShopContext);

  const shortenedTitle = (title, length) =>
    title.length > length ? title.slice(0, length) + "..." : title;

  const ratingStarts = (rate) => "⭐".repeat(Math.round(rate));

  return (
    <div className="product-card">
      <div className="img-container">
        <img src={product.image} className="product-image" />
      </div>
      <div className="product-info">
        <Link to={`${product.id}`}>
          <p>{shortenedTitle(product.title, 40)}</p>
        </Link>
        <p>${product.price}</p>
        <div className="rating-stars">{ratingStarts(product.rating.rate)}</div>
      </div>
      <button
        type="button"
        className="add-item-button"
        onClick={() => addToCart(product, product.id)}
      >
        <AddShoppingCartIcon />
      </button>
      <QuantitySelector
        quantity={getProductQuantity(product.id)}
        product={product}
      />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
