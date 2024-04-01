import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/home.css";
import { useContext, useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";
import { ShopContext } from "../ContextProvider";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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
  const { productList } = useContext(ShopContext);

  useEffect(() => {
    const sortedProducts = productList.sort(
      (a, b) => b.rating.rate - a.rating.rate
    );
    setTopProducts(sortedProducts.slice(0, 5));

    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const categoriesImages = [
          "https://i.imgur.com/d5ftSoB.png",
          "https://i.imgur.com/bzfdazR.png",
          "https://i.imgur.com/1JD4dip.png",
          "https://i.imgur.com/9Hcrym1.png",
        ];
        const update = response.data.map((category, i) => {
          return {
            id: uuidv4(),
            title: category,
            image: categoriesImages[i],
          };
        });
        setCategories(update);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, [productList]);

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
            <CategoryCard category={category} key={category.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
