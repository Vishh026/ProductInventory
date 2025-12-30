import React from "react";
import { NavLink } from "react-router-dom";

const Cart = ({product}) => {

  return (
    <NavLink to= {`/products/${product.id}`}>
   <div className="mx-5 my-10  rounded-2xl overflow-hidden bg-zinc-900 capitalize w-60">
      <div className="flex flex-col justify-between">
         <img
        src={product.image || product.images[0]}
        alt="product-image"
        className="w-full h-45 object-cover"
      />
      <div className="px-2 py-3">
        <div className="p-2 my-3">
        <h1 className="text-md  text-amber-50">{product.title}</h1>
        <h2 className="text-sm my-2 text-[#d2d2d2]">{product.description.slice(0,50)+ "more"}</h2>
        <span className="bg-[#3a3a39] px-3 py-1 rounded-md inline-block">${product.price}</span>
      </div>
      {/* <div className="flex gap-2">
        <button className="bg-[#3a3a39] px-3 py-1 rounded-md inline-block">Update</button>
        <button  className="bg-[#3a3a39] px-3 py-1 rounded-md inline-block">Delete</button>
      </div> */}
      </div>
     </div>
   </div>
    </NavLink>
  );
};

export default Cart;
