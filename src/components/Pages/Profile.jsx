import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Cart from "../Cart";
import { nanoid } from "nanoid";
import { ProductContext } from "../../context/ProductContext";

const Profile = () => {
  const { products, setProducts } = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const createProductHandler = (data) => {
    const updatedProducts = [...products, { ...data, id: nanoid }];
    setProducts(updatedProducts);

    // localStorage.setItem("products",JSON.stringify(updatedProducts))
    reset();
  };

  return (
    <div className="flex gap-10 items-center justify-around">
      <div className="mx-5 my-10 bg-zinc-900 py-2 px-2 capitalize rounded-4xl ">
        <h1 className="text-2xl font-bold text-center py-2"> create Product</h1>
        <form onSubmit={handleSubmit(createProductHandler)} className="">
          <input
            {...register("title", {
              required: "this field is required",
              maxLength: {
                value: 50,
                message: "max 50 charcter only!",
              },
            })}
            type="text"
            className="block mx-5 mt-6 border-b border-[#434341]   bg-transparant outline-none px-4 py-2"
            placeholder="Product name"
          />
          <p className="text-[10px] mx-5 text-red-700">
            {errors?.name?.message}
          </p>
          <input
            {...register("image", {
              required: "Url is required",
              pattern: {
                value: /^https?:\/\/.+/,
                message: "max 50 charcter only!",
              },
            })}
            type="url"
            className="block mx-5 mt-6 border-b border-[#434341]   bg-transparant outline-none px-4 py-2"
            placeholder="Product image"
          />
          <p className="text-[10px] mx-5 text-red-700">
            {errors?.image?.message}
          </p>

          <input
            {...register("price", {
              min: { value: 1, message: "Invalid price" },
            })}
            type="text"
            className="block mx-5 mt-6 border-b border-[#434341]   bg-transparant outline-none px-4 py-2"
            placeholder="Product price"
          />
          <p className="text-[10px] mx-5 text-red-700">
            {errors?.price?.message}
          </p>

          <input
            {...register("description", {
              required: "Description required",
              maxLength: { value: 120, message: "Max 120 chars" },
            })}
            type="text"
            className="block mx-5 mt-6 border-b border-[#434341]   bg-transparant outline-none px-4 py-2"
            placeholder="description"
          />
          <p className="text-[10px] mx-5 text-red-700">
            {errors?.description?.message}
          </p>

          <button className="cursor-pointer my-10 bg-[#cfae84] py-2 px-8 block mx-auto">
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
