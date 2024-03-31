import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import "../styles/products.css";

export default function Products() {
  const [productsList, setProductsList] = useState([]);
  const [productFilters, setProductFilters] = useState([]);
  const [filters, setFilters] = useState({
    price: "",
    category: [],
    rating: [],
  });

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
    const { name, value } = event.target;

    if (filters[name].includes(value)) {
      const update = {
        ...filters,
        [name]: filters[name].filter((item) => item !== value),
      };
      setFilters(update);
    } else if (name === "price") {
      const update = { ...filters, [name]: value };
      setFilters(update);
    } else {
      const update = { ...filters, [name]: [...filters[name], value] };
      setFilters(update);
    }
  };

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
