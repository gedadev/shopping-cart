import PropTypes from "prop-types";
import { useState } from "react";

export default function ProductFilters({ handleOrder, handleFilters }) {
  const [minPrice, setMinPrice] = useState(0);

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  return (
    <>
      <label htmlFor="order-products" hidden>
        Order by
      </label>
      <select name="order-products" id="order-products" onChange={handleOrder}>
        <option value="">Order by:</option>
        <option value="default">Default</option>
        <option value="low-price">Price low to high</option>
        <option value="high-price">Price high to low</option>
        <option value="rating">Best ratings</option>
      </select>
      <div className="filters">
        <h3>Filters:</h3>
        <div className="price-filter">
          <label htmlFor="price-filter">Minimum price</label>
          <input
            type="range"
            name="price-filter"
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
              name="category-filter"
              id="electronics"
              value="electronics"
            />
            <label htmlFor="electronics">Electronics</label>
          </div>
          <div className="category-option">
            <input
              type="checkbox"
              name="category-filter"
              id="jewelry"
              value="jewelery"
            />
            <label htmlFor="jewelry">Jewelry</label>
          </div>
          <div className="category-option">
            <input
              type="checkbox"
              name="category-filter"
              id="men-clothing"
              value="men's clothing"
            />
            <label htmlFor="men-clothing">Men&apos;s clothing</label>
          </div>
          <div className="category-option">
            <input
              type="checkbox"
              name="category-filter"
              id="women-clothing"
              value="women's clothing"
            />
            <label htmlFor="women-clothing">Women&apos;s clothing</label>
          </div>
        </fieldset>
        <fieldset onChange={handleFilters}>
          <legend>By rating:</legend>
          <div className="rating-option">
            <input
              type="checkbox"
              name="rating-filter"
              id="five-stars"
              value="5"
            />
            <label htmlFor="five-stars">{"⭐".repeat(5)}</label>
          </div>
          <div className="rating-option">
            <input
              type="checkbox"
              name="rating-filter"
              id="four-stars"
              value="4"
            />
            <label htmlFor="four-stars">{"⭐".repeat(4)}</label>
          </div>
          <div className="rating-option">
            <input
              type="checkbox"
              name="rating-filter"
              id="three-stars"
              value="3"
            />
            <label htmlFor="three-stars">{"⭐".repeat(3)}</label>
          </div>
          <div className="rating-option">
            <input
              type="checkbox"
              name="rating-filter"
              id="two-stars"
              value="2"
            />
            <label htmlFor="two-stars">{"⭐".repeat(2)}</label>
          </div>
        </fieldset>
      </div>
    </>
  );
}

ProductFilters.propTypes = {
  handleOrder: PropTypes.func,
  handleFilters: PropTypes.func,
};
