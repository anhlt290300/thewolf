import React, { useEffect, useState } from "react";
import { getTotal } from "../../../utils/getTotal";
import { useSelector } from "react-redux";
import axios from "axios";
import ProductCardBill from "./ProductCardBill";
import InputUser from "../payment/payment_detail/user_inform/InputUser";

const BillDetail = () => {
  const { cart } = useSelector((state) => state.cart);
  const total = getTotal(cart);

  const [data, setData] = useState([]);
  const cartArr = useSelector((state) => state.cart.cart);
  const total2 = getTotal(cartArr);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    let param = "";
    for (let i = 0; i < cart.length; i++) {
      if (i === 0) param += cart[i].id;
      else param += "," + cart[i].id;
    }
    axios
      .get(`${process.env.REACT_APP_PORT}/products/getproducts`, {
        params: {
          products: param,
        },
      })
      .then((res) => {
        const arr = res.data.data.map((item, index) => {
          return {
            ...item,
            quantity: cart[index].quantity,
            size: cart[index].size,
          };
        });

        setData(arr);
      })
      .catch((e) => {
        console.log("get data cart that bai");
      });
  }, [cart]);

  return (
    <div className=" select-none desktop:w-[43%] w-full desktop:pt-[4em] desktop:pl-[3%] desktop:pr-[5%] bg-left-top text-[#717171] bg-[#fafafa] desktop:border-l-[1px] border-[#e1e1e1] desktop:border-b-0 border-b-[1px]">
      <div  
        onClick={() => setOpen((open) => !open)}
        className=" border-y-[1px] border-[#e1e1e1] py-[1.25em] cursor-pointer desktop:hidden block"
      >
        <div className="max-w-[40em] m-auto">
          <div className="px-[1em] w-full flex justify-between">
            <div className="flex text-[#338dbc] items-center">
              <div className="pr-[0.75em] whitespace-nowrap">
                <svg
                  width="20"
                  height="19"
                  xmlns="http://www.w3.org/2000/svg"
                  className="order-summary-toggle-icon fill-[#338dbc]"
                >
                  <path d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"></path>
                </svg>
              </div>
              <p className=" font-medium">
                {!open && <span>Hiển thị thông tin đơn hàng</span>}
                {!open && (
                  <svg
                    width="11"
                    height="6"
                    xmlns="http://www.w3.org/2000/svg"
                    className="order-summary-toggle-dropdown ml-[2px] inline-block"
                    fill="#338dbc"
                  >
                    <path d="M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z"></path>
                  </svg>
                )}
                {open && (
                  <span>
                    <span>Ẩn thông tin đơn hàng</span>
                  </span>
                )}
                {open && (
                  <svg
                    width="11"
                    height="7"
                    xmlns="http://www.w3.org/2000/svg"
                    className="order-summary-toggle-dropdown ml-[2px] inline-block"
                    fill="#338dbc"
                  >
                    <path d="M6.138.876L5.642.438l-.496.438L.504 4.972l.992 1.124L6.138 2l-.496.436 3.862 3.408.992-1.122L6.138.876z"></path>
                  </svg>
                )}
              </p>
            </div>

            <div className=" text-[1.3em] text-[#4d4d4d] whitespace-nowrap">{total2}</div>
          </div>
        </div>
      </div>

      <div className=" desktop:max-w-full max-w-[40em] m-auto desktop:px-0 px-[1em] desktop:mt-0">
        {open && (
          <div className="border-b-[1px] border-[#e1e1e1] pb-[1em] mt-[1.5em]">
            {data.length !== 0 &&
              data.map((item, index) => {
                return (
                  <div className="pt-[1em] first:pt-0" key={index}>
                    <ProductCardBill product={item} />
                  </div>
                );
              })}
          </div>
        )}
        <div className=" pb-[1em] pt-[1.5em] grid grid-cols-7 gap-[1em]">
          <div className=" col-span-5">
            <InputUser title="Mã giảm giá" type="text" />
          </div>
          <button className="col-span-2 bg-[#338dbc] hover:bg-[#3da4d7] rounded-[4px] inline-block text-center cursor-pointer transition-all duration-200 ease-in-out text-white">
            Sử dụng
          </button>
        </div>

        {open && (
          <div className="py-[1.5em] border-y-[1px] border-[#e1e1e1]">
            <p className="flex w-full justify-between items-center">
              <span>Tạm tính</span>
              <span className=" text-black-primary font-medium">{total2}</span>
            </p>
            <p className="flex w-full justify-between items-center pt-[0.75em]">
              <span>Phí vận chuyển</span>
              <span className=" text-black-primary font-medium">40,000₫</span>
            </p>
          </div>
        )}
        {open && (
          <div className="my-[1.5em] flex w-full justify-between items-center ">
            <span className=" text-[1.2em] text-[#4b4b4b]">Tổng cộng</span>
            <span className=" text-[#4b4b4b] tracking-[-0.04em] whitespace-nowrap font-medium text-[1.7em] flex items-center">
              <span className=" text-[#969696] text-[0.85em] align-[0.2em] mr-[0.5em]">
                VND
              </span>{" "}
              {total2}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillDetail;
