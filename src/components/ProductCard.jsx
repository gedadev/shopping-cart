import PropTypes from "prop-types";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} />
      <p>{product.title}</p>
      <p>${product.price}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
