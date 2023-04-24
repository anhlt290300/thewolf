import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBoxCart } from "../../redux/slice/BoxCartSlice";
import { toggleMark } from "../../redux/slice/MarkSlice";
import { getTotal } from "../../utils/getTotal";
import ProductCartBox from "./ProductCartBox";
const CartBox = () => {
  const dispatch = useDispatch();

  const flag = useSelector((state) => state.cartbox.flag);
  const cartRef = useRef(null);
  const cartArr = useSelector((state) => state.cart.cart);
  const total = getTotal(cartArr);
  useEffect(() => {
    if (flag) {
      cartRef.current.classList.remove("translate-x-full");
      cartRef.current.classList.add("translate-x-0");
    } else {
      cartRef.current.classList.add("translate-x-full");
      cartRef.current.classList.remove("translate-x-0");
    }
  }, [flag]);

  return (
    <div
      id="cart-box"
      ref={(el) => (cartRef.current = el)}
      className=" tablet:w-[510px] overflow-hidden w-[320px] h-screen bg-white fixed top-0 translate-x-full desktop-L:-right-[30px] right-0 z-[999] transition-all duration-500 ease-easy_  text-sm select-none"
    >
      <div className=" overflow-y-scroll w-full relative h-full">
        <div
          className=" overflow-y-scroll h-full 
        tablet:px-[70px] tablet:py-[60px] px-[30px] py-[40px] "
        >
          <p className=" font-medium">GIỎ HÀNG</p>
          <div className="mt-[60px]">
            <div className=" bg-transparent w-full">
              {cartArr.map((item, index) => {
                return (
                  <div
                    className=" border-b-[1px] border-[#bcbcbc] border-dotted last:border-none"
                    key={index}
                  >
                    <ProductCartBox
                      product_id={item.id}
                      size={item.size}
                      quantity={item.quantity}
                    />
                  </div>
                );
              })}
            </div>
            {cartArr.length === 0 && (
              <p className="py-[25px]">Hiện chưa có sản phẩm</p>
            )}
            <span className="my-[10px] border-t-[2px] border-solid border-black w-full inline-block "></span>
            <div>
              <div className="grid grid-cols-2">
                <div className="py-[10px] pr-[10px] text-start">
                  <p>TỔNG TIỀN:</p>
                </div>
                <div className="py-[10px] pl-[10px] text-end">
                  <p>{total}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2">
                <a
                  href="/cart"
                  className=" py-[19px] mr-[10px] px-[30px] whitespace-nowrap mt-[10px]
                   border-[1px] border-solid border-white uppercase bg-black-primary text-white flex justify-center"
                >
                  {" "}
                  <span className="">Xem giỏ hàng</span>
                </a>
                <a
                  href="/checkout"
                  className=" py-[19px] ml-[10px] px-[30px] whitespace-nowrap mt-[10px]
                   border-[1px] border-solid border-white uppercase bg-black-primary text-white flex justify-center"
                >
                  {" "}
                  <span>Thanh toán</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          className=" absolute tablet:top-[60px] tablet:right-[70px] top-[40px] right-[30px] hover:scale-110 transition-all duration-200 ease-linear"
          onClick={() => {
            dispatch(toggleBoxCart());
            dispatch(toggleMark());
          }}
        >
          <span></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartBox;
