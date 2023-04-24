import React from "react";
import PropTypes from "prop-types";
import { getProductsById } from "../../assets/fakeData/products";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/slice/cartSlice";

const ProductCartBox = ({ product_id, size, quantity }) => {
  const product = getProductsById(product_id);
  const dispatch = useDispatch();
  return (
    <div className="w-full select-none flex">
      <div className="pl-none p-[10px] desktop:pl-[10px] pl-0 flex flex-col justify-center desktop:max-w-[70px] max-w-[80px]">
        <a href={product.imgcard.href}>
          <img
            className="w-full mr-[10px] border-[1px] border-solid border-[#ededed] align-middle"
            src={product.imgcard.src1}
            alt=""
          />
        </a>
      </div>
      <div className=" pl-0 p-[25px] relative pr-[20px] w-full">
        <a
          className=" inline-block text-[13px] font-bold uppercase"
          href={product.imgcard.href}
        >
          {product.title.content}
        </a>
        {size !== undefined ? (
          <span className="block text-[12px] mt-[5px] mb-[12px] opacity-60 uppercase ">
            {product.colors.title} / {size}
          </span>
        ) : (
          <span className=" block text-[12px] mt-[5px] mb-[12px] opacity-60 uppercase ">
            {product.colors.title}
          </span>
        )}
        <p>
          <span className="mr-[12px] py-[6px] px-[12px] text-center bg-[#ededed] text-[12px] leading-[1] inline-block">
            {quantity}
          </span>
          <span className=" inline-block text-center leading-[26px] font-medium opacity-70">
            {product.price.saleprice}
          </span>
        </p>
        <span
          onClick={() => dispatch(deleteItem(product_id))}
          className=" absolute right-[5px] top-1/2 -translate-y-1/2 cursor-pointer hover:text-hover-a"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

ProductCartBox.propTypes = {
  product_id: PropTypes.string.isRequired,
  size: PropTypes.string,
  quantity: PropTypes.number.isRequired,
};

export default ProductCartBox;
