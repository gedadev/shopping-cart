import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import "../styles/products.css";

export default function Products() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductsList(json));
  }, [setProductsList, productsList]);

  const handleOrder = (event) => {
    console.log(event.target.value);
  };

  const handleCategorySelection = (event) => {
    console.log(event.target.value);
  };

  const handleRatingSelection = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="products-section">
      <div className="product-filters">
        <ProductFilters
          handleOrder={handleOrder}
          handleCategorySelection={handleCategorySelection}
          handleRatingSelection={handleRatingSelection}
        />
      </div>
      <div className="products-container">
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
