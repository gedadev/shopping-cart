import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/home.css";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";

export default function Home() {
  const images = [
    {
      original:
        "https://live.staticflickr.com/65535/53499605365_5e7309128e_k.jpg",
    },
    {
      original:
        "https://live.staticflickr.com/65535/53498300362_53ab8cbdfe_k.jpg",
    },
    {
      original:
        "https://live.staticflickr.com/65535/53499489784_8e5205a530_k.jpg",
    },
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
        const catImages = [
          "https://live.staticflickr.com/65535/53499615155_773e8b8acf_m.jpg",
          "https://live.staticflickr.com/65535/53499348663_cf817a7359_m.jpg",
          "https://live.staticflickr.com/65535/53498310607_5bbf75001c_m.jpg",
          "https://live.staticflickr.com/65535/53499348653_e48ddc633f_m.jpg",
        ];
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
