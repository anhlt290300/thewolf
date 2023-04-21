import React, { useState } from "react";
import PropTypes from "prop-types";

const ProductBuy = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const toggleQuantity = (key) => {
    if (key === "add") {
      setQuantity((quantity) => quantity + 1);
    } else {
      if (quantity === 1) return;
      else setQuantity((quantity) => quantity - 1);
    }
  };
  return (
    <div className=" col-span-3 px-[15px] select-none">
      <div className="pl-[10px] pb-[10px] border-b-[1px] border-[#dfe0e1] border-dotted">
        <span className="py-[5px] px-[15px] bg-[#ededed] text-hover-a font-semibold text-xs inline-block mr-[10px]">
          {product.discount}
        </span>
        <span className="text-[15px] opacity-[0.95] font-bold">
          {product.price.saleprice}
        </span>
        {product.price.realprice && (
          <del className="text-[11px] text-[#777a7b] pl-[10px] font-medium">
            {product.price.realprice}
          </del>
        )}
      </div>
      <div className="mb-[10px]">
        <div className="my-[6px] text-[11px] pb-[3px] border-b-[2px] border-black-primary inline-block">
          <button>
            <span>Hướng dẫn chọn size</span>
          </button>
        </div>
      </div>
      <div className="mt-[15px]">
        <div className="mb-[15px] flex items-center">
          <button
            onClick={() => toggleQuantity("minus")}
            className="w-[32px] h-[32px] bg-[#f5f5f5] font-semibold text-center flex justify-center items-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </span>
          </button>
          <div className="w-[70px] h-[32px] font-semibold flex justify-center items-center border-[1px] border-[#f5f5f5] border-solid rounded-[1px]">
            <span>{quantity}</span>
          </div>
          <button
            onClick={() => toggleQuantity("add")}
            className="w-[32px] h-[32px] bg-[#f5f5f5] font-semibold text-center flex justify-center items-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div
        className={
          product.soldout !== "Hết hàng"
            ? "group/soldout"
            : "group/soldout open"
        }
      >
        <button className="px-[35px] py-[8px] text-[11px] font-bold uppercase text-white group-[.open]/soldout:opacity-80 hover:text-black-primary leading-[22px] border-[1px] border-solid border-white hover:border-black-primary bg-black-primary hover:bg-white">
          {product.soldout !== "Hết hàng" ? "Thêm vào giỏ" : product.soldout}
        </button>
      </div>
      <div className="mt-[15px] mb-[10px]">
        <div className="h-[40px] flex items-center text-xs tracking-[1px] py-[10px] mb-[5px]">
          <img
            className="h-[35px]"
            src="https://theme.hstatic.net/200000033444/1000979633/14/img_item_service_1.png?v=205"
            alt=""
          />
          <a
            className="text-[11px] leading-[22px] text-[#1c1c1] ml-[3px]"
            href="/pages/phuong-thuc-thanh-toan-giao-hang"
          >
            PHƯƠNG THỨC THANH TOÁN{" "}
            <strong>
              <b>ĐA DẠNG</b>
            </strong>
          </a>
        </div>
        <div className="h-[40px] flex items-center text-xs tracking-[1px] py-[10px]  mb-[5px]">
          <img
            className="h-[35px]"
            src="https://theme.hstatic.net/200000033444/1000979633/14/img_item_service_3.png?v=205"
            alt=""
          />
          <a
            className="text-[11px] leading-[22px] text-[#1c1c1] ml-[3px]"
            href="/products/the-s-wolf-tote-bag-military-green"
          >
            NHÂN VIÊN GỌI ĐIỆN TƯ VẤN TRỰC TIẾP{" "}
            <strong>
              <b></b>
            </strong>
          </a>
        </div>
        <div className="h-[40px] flex items-center text-xs tracking-[1px] py-[10px]  mb-[5px]">
          <img
            className="h-[35px]"
            src="https://theme.hstatic.net/200000033444/1000979633/14/img_item_service_4.png?v=205"
            alt=""
          />
          <a
            className="text-[11px] leading-[22px] text-[#1c1c1] ml-[3px]"
            href="/pages/chinh-sach-doi-hang"
          >
            HỖ TRỢ ĐỔI SIZE{" "}
            <strong>
              <b>- SẢN PHẨM LỖI</b>
            </strong>
          </a>
        </div>
      </div>
    </div>
  );
};

ProductBuy.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductBuy;
