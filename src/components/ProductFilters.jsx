import PropTypes from "prop-types";
import { useContext, useState } from "react";
import Filters from "./Filters";
import { ShopContext } from "../ContextProvider";

export default function ProductFilters({ handleOrder, handleFilters }) {
  const [activeFilters, setActiveFilters] = useState(false);
  const { isMobile } = useContext(ShopContext);

  const handleModal = () => {
    if (isMobile) {
      setActiveFilters(!activeFilters);
    }
  };

  return (
    <>
      <div className="order-by">
        <label htmlFor="order-products" hidden>
          Order by
        </label>
        <select
          name="order-products"
          id="order-products"
          onChange={handleOrder}
        >
          <option value="">Order by:</option>
          <option value="default">Default</option>
          <option value="low-price">Price low to high</option>
          <option value="high-price">Price high to low</option>
          <option value="rating">Best ratings</option>
        </select>
      </div>
      <div className="filters">
        <h3 onClick={handleModal}>Filters:</h3>
        {isMobile ? (
          <>
            {activeFilters && (
              <div className="filters-modal">
                <div>
                  <Filters handleFilters={handleFilters} />
                </div>
                <button
                  type="button"
                  onClick={handleModal}
                  className="close-modal-button"
                >
                  Done
                </button>
              </div>
            )}
          </>
        ) : (
          <Filters handleFilters={handleFilters} />
        )}
      </div>
    </>
  );
}

ProductFilters.propTypes = {
  handleOrder: PropTypes.func,
  handleFilters: PropTypes.func,
};
