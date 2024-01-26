import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import "../styles/products.css";

export default function Products() {
  const [productsList, setProductsList] = useState([]);
  const [productFilters, setProductFilters] = useState([]);

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

  const handleFilters = (event) => {
    if (!productFilters.includes(event.target.value) && event.target.checked) {
      setProductFilters([...productFilters, event.target.value]);
    }
    if (!event.target.checked) {
      setProductFilters(
        [...productFilters]
          .slice(0, productFilters.indexOf(event.target.value))
          .concat(
            [...productFilters].slice(
              productFilters.indexOf(event.target.value) + 1
            )
          )
      );
    }
  };

  // Pending to apply the filter by rating and min price

  return (
    <div className="products-section">
      <div className="product-filters">
        <ProductFilters
          handleOrder={handleOrder}
          handleFilters={handleFilters}
        />
      </div>
      <div className="products-container">
        {productsList.map((product) =>
          productFilters.length === 0 ? (
            <ProductCard key={product.id} product={product} />
          ) : productFilters.includes(product.category) ? (
            <ProductCard key={product.id} product={product} />
          ) : null
        )}
      </div>
    </div>
  );
}
