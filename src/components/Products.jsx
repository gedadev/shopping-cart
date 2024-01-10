import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/products.css";

export default function Products() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductsList(json));
  }, [setProductsList, productsList]);

  return (
    <div className="products-section">
      <div className="product-filters"></div>
      <div className="products-container">
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
