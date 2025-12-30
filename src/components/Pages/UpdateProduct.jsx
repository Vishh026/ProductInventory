import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
import Cart from "../Cart"

const UpdateProduct = () => {
  const { products, setProducts } = useContext(ProductContext);
  const { id } = useParams();
  const singleProduct = products.find((product) => product.id == id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: singleProduct,
  });

  
   const updateHandler = (updatedProduct) => {
    const updatedProducts = products.map((p) => {
    if (p.id == id) {
      return { ...p, ...updatedProduct };
    }
    return p; 
  });
  setProducts(updatedProducts);
  };

  
   const deleteHandler = () => {
    setProducts(products.filter((p) => p.id !== products.id));
  };

  if (!singleProduct) return <p>Product not found!</p>;

  return (
    <div className="flex justify-center">
      <div className="mx-5 my-10 bg-zinc-900 py-6 px-4 rounded-2xl w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Update Product</h1>
        <form onSubmit={handleSubmit(updateHandler)} className="space-y-4">
          <input
            {...register("title", {
              required: "Title is required",
              maxLength: { value: 50, message: "Max 50 characters" },
            })}
            type="text"
            className="w-full border-b border-gray-500 bg-transparent px-4 py-2"
            placeholder="Product Title"
          />
          <p className="text-red-600 text-sm">{errors?.title?.message}</p>

          <input
            {...register("image", {
              required: "Image URL is required",
              pattern: {
                value: /^https?:\/\/.+/,
                message: "Enter a valid URL",
              },
            })}
            type="url"
            className="w-full border-b border-gray-500 bg-transparent px-4 py-2"
            placeholder="Product Image URL"
          />
          <p className="text-red-600 text-sm">{errors?.image?.message}</p>

          <input
            {...register("price", {
              required: "Price is required",
              min: { value: 1, message: "Invalid price" },
            })}
            type="number"
            className="w-full border-b border-gray-500 bg-transparent px-4 py-2"
            placeholder="Product Price"
          />
          <p className="text-red-600 text-sm">{errors?.price?.message}</p>

          <input
            {...register("description", {
              required: "Description required",
              maxLength: { value: 120, message: "Max 120 chars" },
            })}
            type="text"
            className="w-full border-b border-gray-500 bg-transparent px-4 py-2"
            placeholder="Product Description"
          />
          <p className="text-red-600 text-sm">{errors?.description?.message}</p>

          <div className="flex gap-4 mt-6 justify-center">
            <button
              type="submit"
              className="bg-[#cfae84] py-2 px-6 rounded-md"
            >
              Update
            </button>
            <button
              type="button"
              onClick={deleteHandler}
              className="bg-red-600 text-white py-2 px-6 rounded-md"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
      <Cart product= {singleProduct}/>
    </div>
  );
};

export default UpdateProduct;
