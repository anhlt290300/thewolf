import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import { useSelector } from "react-redux";
import CartCard from "../component/cart/CartCard";
import { getTotal } from "../utils/getTotal";

const Cart = () => {
  const cartArr = useSelector((state) => state.cart.cart);
  const total = getTotal(cartArr);
  const cartlength = useSelector(state=>state.cart.cartlength)
  return (
    <div className=" select-none">
      <BreadCrumb />
      <section>
        <div className="pt-[30px]">
          <div
            className="pb-[30px] relative text-center 
          after:block after:bg-black-primary after:w-[60px] after:h-[4px] after:mt-[25px] after:mx-auto"
          >
            <h1 className="text-[30px] mb-[10px] font-bold text-black-primary leading-[1.2]">
              Giỏ hàng của bạn
            </h1>
            <p className="mb-[10px] leading-[21px]">
              Có <span>{cartlength} sản phẩm</span> trong giỏ hàng
            </p>
          </div>
        </div>
        <div className=" desktop:px-[100px] px-[15px] mb-[30px]">
          <div className="grid grid-cols-12 tablet:gap-[30px]">
            {cartArr.length !== 0 &&
              cartArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" col-span-12 last:border-none border-b-[1px] border-solid border-[#dadada]"
                  >
                    <CartCard
                      product_id={item.id}
                      size={item.size}
                      quantity={item.quantity}
                    />
                  </div>
                );
              })}
            <div className=" desktop:col-span-6 col-span-12">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Ghi chú"
                className="bg-[#ededed] resize-none text-[15px] border-[1px] border-solid border-transparent font-medium p-[20px] h-[130px] w-full outline-none tablet:mb-0 mb-[40px]"
              ></textarea>
            </div>
            <div className=" desktop:col-span-6 col-span-12 text-end">
              <p className=" font-medium text-[16px] mb-[40px] leading-[21px]">
                Tổng tiền:{" "}
                <span className=" text-[30px] ml-[7px] font-semibold">
                  {total}
                </span>
              </p>
              <div className="flex justify-end items-center flex-wrap tablet:text-[12px] text-[11px]">
                <a
                  href="/collections/all"
                  className="flex items-center w-fit align-top tablet:p-[20px] px-[15px] py-[8px] flex-nowrap hover:text-black-primary whitespace-nowrap"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-return-left mr-[3px]"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  <span>Tiếp tục mua hàng</span>
                </a>
                <button
                  onClick={() => {
                    window.location.reload();
                    window.scrollTo(0, 0);
                  }}
                  className=" inline-block tablet:p-[20px] px-[15px] py-[8px] whitespace-nowrap"
                >
                  Cập nhật
                </button>
                <a href="/checkouts" className=" inline-block tablet:p-[20px] px-[15px] py-[8px] whitespace-nowrap">Thanh toán</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
