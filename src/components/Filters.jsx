import PropTypes from "prop-types";
import { useState } from "react";

function Filters({ handleFilters }) {
  const [minPrice, setMinPrice] = useState(0);

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
    handleFilters(event);
  };

  return (
    <>
      <div className="price-filter">
        <label htmlFor="price-filter">Minimum price:</label>
        <input
          type="range"
          name="price"
          id="price-filter"
          min="0"
          max="900"
          value={minPrice}
          onChange={handleMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <fieldset onChange={handleFilters}>
        <legend>By category:</legend>
        <div className="category-option">
          <input
            type="checkbox"
            name="category"
            id="electronics"
            value="electronics"
          />
          <label htmlFor="electronics">Electronics</label>
        </div>
        <div className="category-option">
          <input
            type="checkbox"
            name="category"
            id="jewelry"
            value="jewelery"
          />
          <label htmlFor="jewelry">Jewelry</label>
        </div>
        <div className="category-option">
          <input
            type="checkbox"
            name="category"
            id="men-clothing"
            value="men's clothing"
          />
          <label htmlFor="men-clothing">Men&apos;s clothing</label>
        </div>
        <div className="category-option">
          <input
            type="checkbox"
            name="category"
            id="women-clothing"
            value="women's clothing"
          />
          <label htmlFor="women-clothing">Women&apos;s clothing</label>
        </div>
      </fieldset>
      <fieldset onChange={handleFilters}>
        <legend>By rating:</legend>
        <div className="rating-option">
          <input type="checkbox" name="rating" id="five-stars" value="5" />
          <label htmlFor="five-stars">{"⭐".repeat(5)}</label>
        </div>
        <div className="rating-option">
          <input type="checkbox" name="rating" id="four-stars" value="4" />
          <label htmlFor="four-stars">{"⭐".repeat(4)}</label>
        </div>
        <div className="rating-option">
          <input type="checkbox" name="rating" id="three-stars" value="3" />
          <label htmlFor="three-stars">{"⭐".repeat(3)}</label>
        </div>
        <div className="rating-option">
          <input type="checkbox" name="rating" id="two-stars" value="2" />
          <label htmlFor="two-stars">{"⭐".repeat(2)}</label>
        </div>
      </fieldset>
    </>
  );
}

Filters.propTypes = {
  handleFilters: PropTypes.func,
};

export default Filters;
