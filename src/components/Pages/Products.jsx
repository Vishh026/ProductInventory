import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import Cart from "../Cart";
import axios from "axios";

const Products = () => {
  
  
  const { products,setProducts } = useContext(ProductContext);

  const fetchProducts = async() => {
    try {
      const {data} = await axios.get('https://dummyjson.com/products')
      setProducts(data.products)
    } catch (error) {
      console.log(error.message);
      
    }

  }

  useEffect(()=> {
    fetchProducts()
  },[])

  
  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product) => (
        <Cart product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
