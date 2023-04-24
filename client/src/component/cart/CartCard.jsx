import React, { useState } from "react";
import PropTypes from "prop-types";
import { getProductsById } from "../../assets/fakeData/products";
import Quantity from "./Quantity";
import { getTotal } from "../../utils/getTotal";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../redux/slice/cartSlice";
const CartCard = ({ product_id, size, quantity }) => {
  const dispatch = useDispatch();
  const product = getProductsById(product_id);
  const [quantity_, setQuantity_] = useState(quantity);
  const total = getTotal([{ id: product_id, quantity: quantity }]);
  const toggleQuantity = (key) => {
    if (key === "add") {
      setQuantity_((quantity_) => quantity_ + 1);
      dispatch(updateItem({ id: product_id, quantity: quantity_ + 1 }));
    } else {
      if (quantity === 1) return;
      else {
        setQuantity_((quantity_) => quantity_ - 1);
        dispatch(updateItem({ id: product_id, quantity: quantity_ - 1 }));
      }
    }
  };
  return (
    <div className="flex relative py-[20px] select-none">
      <div className=" desktop:w-[110px] tablet:max-w-[100px] max-w-[70px]">
        <a href={product.imgcard.href} className="w-full">
          <img className="w-full" src={product.imgcard.src1} alt="" />
        </a>
      </div>
      <div className=" tablet:pl-[15px] pl-[5px] w-full">
        <a href={product.imgcard.href}>
          <h3 className=" text-[16px] font-bold inline-block pb-[5px] leading-[1.2] tablet:pr-0 pr-[20px]">
            {product.title.content}
          </h3>
        </a>
        <p className="mb-[5px] leading-[21px]">
          <span>{product.price.saleprice}</span>
        </p>
        <p className="mb-[5px] ">
          {size !== undefined ? (
            <span>
              {product.colors.title} / {size}
            </span>
          ) : (
            <span>
              {product.colors.title} 
            </span>
          )}
        </p>
        <div className=" tablet:flex justify-between items-center w-full">
          <Quantity
            quantity={quantity_}
            toggleQuantity={toggleQuantity}
            type="cart"
          />
          <p className=" inline-block tablet:my-0 my-[15px]">
            <span className=" tablet:hidden inline-block text-[12px] font-medium mr-[3px]">
              Thành tiền:
            </span>
            <span className=" text-[16px]">{total}</span>
          </p>
        </div>
      </div>
      <span
        onClick={() => dispatch(deleteItem(product_id))}
        className=" absolute right-0 tablet:top-[25px] top-[20px] tablet:scale-100 scale-125 cursor-pointer"
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
  );
};

CartCard.propTypes = {
  product_id: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartCard;
