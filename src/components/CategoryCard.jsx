import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link to="products">
      <div className="category-card">
        <img src={category.image} />
        <p>{category.title.replace(/^\w/, (first) => first.toUpperCase())}</p>
      </div>
    </Link>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.object,
};
