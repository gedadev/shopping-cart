import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import "../styles/products.css";
import { ShopContext } from "../ContextProvider";

export default function Products() {
  const { productList } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    price: "0",
    category: [],
    rating: [],
  });

  useEffect(() => {
    const update = productList.filter((product) => {
      const categoryFilter =
        filters.category.includes(product.category) ||
        filters.category.length === 0;
      const ratingFilter =
        filters.rating.includes(String(Math.round(product.rating.rate))) ||
        filters.rating.length === 0;
      const priceFilter = product.price > Number(filters.price);

      return categoryFilter && ratingFilter && priceFilter;
    });
    setFilteredProducts(update);
  }, [filters, productList]);

  const handleOrder = (event) => {
    const value = event.target.value;

    value === "low-price"
      ? setFilteredProducts(
          [...filteredProducts].sort((a, b) => a.price - b.price)
        )
      : value === "high-price"
      ? setFilteredProducts(
          [...filteredProducts].sort((a, b) => b.price - a.price)
        )
      : value === "rating"
      ? setFilteredProducts(
          [...filteredProducts].sort((a, b) => b.rating.rate - a.rating.rate)
        )
      : setFilteredProducts([...filteredProducts].sort((a, b) => a.id - b.id));
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
        {productList &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
