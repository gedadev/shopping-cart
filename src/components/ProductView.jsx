import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../ContextProvider";
import { useParams } from "react-router-dom";

export default function ProductView() {
  const { productList } = useContext(ShopContext);
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const product = productList.find((product) => product.id === Number(id));
    setSelectedProduct(product);

    return () => setSelectedProduct(null);
  }, [id, productList]);

  return (
    <section className="product-view">{console.log(selectedProduct)}</section>
  );
}
