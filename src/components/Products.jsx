import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => setProductsList(json));
  }, [setProductsList, productsList]);

  return (
    <>
      <div className="products-container">
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
