import React from "react";
import PropTypes from "prop-types";
import { getTotal } from "../../../utils/getTotal";

const ProductCardBill = ({ product }) => {
  return (
    <div className="flex items-center">

      <div className="min-w-[4.6em] w-[4.6em] h-[4.6em] rounded-[8px] border-[1px] border-[#e1e1e1] border-collapse relative">
        <img
          src={product.imgcard.src1}
          className=" rounded-[8px] min-h-full min-w-full"
          alt=""
        />
        <div className="p-[0.15em_0.65em] bg-[rgba(153,153,153,0.9)] rounded-full whitespace-nowrap font-medium text-[0.85em] absolute top-[-0.75em] right-[-0.75em] text-white">
          {product.quantity}
        </div>
      </div>

      <div className="pl-[1em] flex-auto flex flex-col justify-between items-start h-full">
        <span className="block text-[#4b4b4b] font-medium">
          {product.title.content}
        </span>
        <span className="block">
          {product.colors.title} / {product.size}
        </span>
      </div>

      <div className="pl-[1em] flex items-center justify-center text-black-primary">
        <span>{getTotal([{ id: product.code, quantity: product.quantity }])}</span>
      </div>
    </div>
  );
};

ProductCardBill.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCardBill;
