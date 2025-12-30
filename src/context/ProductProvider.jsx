import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";


const ProductProvider = ({children}) => {
    const [products ,setProducts] = useState(()=> {
      try{
        const storeData = localStorage.getItem("products")
      return storeData ? JSON.parse(storeData) : []
      }catch(err){
        console.log("Issue in localStorage data",err)
        return []
      }
    })
    
 useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  return (
    <ProductContext.Provider value = {{products,setProducts}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;
