import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import fashionBanner from "../assets/casual-fashion-banner.png";
import saleBanner from "../assets/sale-banner.png";
import shippingBanner from "../assets/free-shipping-banner.png";
import "../styles/home.css";
import { useEffect } from "react";
import { useState } from "react";

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
      .then((json) => setCategories(json));
  }, []);

  return (
    <div className="home-section">
      <ImageGallery
        items={images}
        autoPlay={true}
        showBullets={true}
        showFullscreenButton={false}
      />
      <div className="top-products">{console.log(topProducts)}</div>
      <div className="categories">{console.log(categories)}</div>
    </div>
  );
}
