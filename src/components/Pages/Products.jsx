import React, { useContext  } from "react";
import { ProductContext } from "../../context/ProductContext";
import Cart from "../Cart";

const Products = () => {
  const { products } = useContext(ProductContext);

  
  return (
    <div>
      {products.map((product) => (
        <Cart product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
