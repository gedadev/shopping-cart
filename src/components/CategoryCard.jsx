import PropTypes from "prop-types";

export default function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <img src={category.image} />
      <p>{category.title.replace(/^\w/, (first) => first.toUpperCase())}</p>
    </div>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.object,
};
