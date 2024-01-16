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
  }, [setProductsList]);

  const handleOrder = (event) => {
    event.target.value === "low-price"
      ? setProductsList([...productsList].sort((a, b) => a.price - b.price))
      : event.target.value === "high-price"
      ? setProductsList([...productsList].sort((a, b) => b.price - a.price))
      : event.target.value === "rating"
      ? setProductsList(
          [...productsList].sort((a, b) => b.rating.rate - a.rating.rate)
        )
      : setProductsList([...productsList].sort((a, b) => a.id - b.id));
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
