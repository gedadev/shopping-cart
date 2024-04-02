import "../styles/productView.css";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../ContextProvider";
import { useParams } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductView() {
  const { productList, getProductQuantity, addToCart } =
    useContext(ShopContext);
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const product = productList.find((product) => product.id === Number(id));
    setSelectedProduct(product);

    return () => setSelectedProduct(null);
  }, [id, productList]);

  const ratingStarts = (rate) => "⭐".repeat(Math.round(rate));

  return (
    <section className="product-view">
      {selectedProduct && (
        <div className="product-container">
          <img src={selectedProduct.image} alt="product-image" />
          <div className="product-details">
            <h2>{selectedProduct.title}</h2>
            <p>{`$${selectedProduct.price}`}</p>
            <div className="rating-stars">
              {ratingStarts(selectedProduct.rating.rate)}
            </div>
            <p>{selectedProduct.description}</p>
            <button
              type="button"
              className="add-item-button"
              onClick={() => addToCart(selectedProduct, selectedProduct.id)}
            >
              <AddShoppingCartIcon />
            </button>
            <QuantitySelector
              quantity={getProductQuantity(selectedProduct.id)}
              product={selectedProduct}
            />
          </div>
        </div>
      )}
    </section>
  );
}
