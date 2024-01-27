import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import fashionBanner from "../assets/banners/casual-fashion-banner.png";
import saleBanner from "../assets/banners/sale-banner.png";
import shippingBanner from "../assets/banners/free-shipping-banner.png";
import "../styles/home.css";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";
import electronicsImg from "../assets/categories-images/electronics-category.png";
import jewelryImg from "../assets/categories-images/jewelry-category.png";
import menImg from "../assets/categories-images/men-category.png";
import womenImg from "../assets/categories-images/women-category.png";

export default function Home() {
  const images = [
    { original: fashionBanner },
    { original: saleBanner },
    { original: shippingBanner },
  ];

  const [topProducts, setTopProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const sorted = json.sort((a, b) => b.rating.rate - a.rating.rate);
        setTopProducts(sorted.slice(0, 5));
      });
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        const catImages = [electronicsImg, jewelryImg, menImg, womenImg];
        const catArray = json.map((category, index) => ({
          title: category,
          image: catImages[index],
        }));
        setCategories(catArray);
      });
  }, []);

  return (
    <div className="home-section">
      <ImageGallery
        items={images}
        autoPlay={true}
        showBullets={true}
        showFullscreenButton={false}
      />
      <div className="top-products">
        <h2>Check our Top products</h2>
        <div className="top-products-container">
          {topProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className="categories">
        <h2>Browse our categories</h2>
        <div className="categories-container">
          {categories.map((category) => (
            <CategoryCard category={category} key={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
