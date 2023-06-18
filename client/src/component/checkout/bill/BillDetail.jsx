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
  }, []);

  return (
    <div className="w-[43%] pt-[4em] pl-[3%] pr-[5%] bg-left-top text-[#717171] bg-[#fafafa] border-l-[1px] border-[#e1e1e1]">
      <div className="border-b-[1px] border-[#e1e1e1] pb-[1em]">
        {data.length !== 0 &&
          data.map((item, index) => {
            return (
              <div className="pt-[1em] first:pt-0" key={index}>
                <ProductCardBill product={item} />
              </div>
            );
          })}
      </div>
      <div className="border-b-[1px] border-[#e1e1e1] pb-[1em] pt-[1.5em] grid grid-cols-7 gap-[1em]">
        <div className=" col-span-5">
          <InputUser title="Mã giảm giá" type="text" />
        </div>
        <button className="col-span-2 bg-[#338dbc] hover:bg-[#3da4d7] rounded-[4px] inline-block text-center cursor-pointer transition-all duration-200 ease-in-out text-white">
          Sử dụng
        </button>
      </div>

      <div className="py-[1.5em] border-b-[1px] border-[#e1e1e1]">
        <p className="flex w-full justify-between items-center">
          <span>Tạm tính</span>
          <span className=" text-black-primary font-medium">{total2}</span>
        </p>
        <p className="flex w-full justify-between items-center pt-[0.75em]">
          <span>Phí vận chuyển</span>
          <span className=" text-black-primary font-medium">40,000₫</span>
        </p>
      </div>

      <div className="mt-[1.5em] flex w-full justify-between items-center ">
        <span className=" text-[1.2em] text-[#4b4b4b]">Tổng cộng</span>
        <span className=" text-[#4b4b4b] tracking-[-0.04em] whitespace-nowrap font-medium text-[1.7em] flex items-center">
          <span className=" text-[#969696] text-[0.85em] align-[0.2em] mr-[0.5em]">VND</span> {total2}
        </span>
      </div>
    </div>
  );
};

export default BillDetail;
