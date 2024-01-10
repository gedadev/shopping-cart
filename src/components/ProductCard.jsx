import PropTypes from "prop-types";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={product.image} className="product-image" />
      </div>
      <p>
        {product.title.length > 35
          ? product.title.slice(0, 35) + "..."
          : product.title}
      </p>
      <p>${product.price}</p>
      <button type="button" className="add-item-button">
        Add to cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
