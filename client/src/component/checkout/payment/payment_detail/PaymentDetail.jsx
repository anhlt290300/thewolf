import React from "react";
import PaymentHeader from "./payment_header/PaymentHeader";
import UserInform from "../UserInform";
import DeliveryMethod from "./checkout_menthod/DeliveryMethod";
import CheckoutMethod from "./checkout_menthod/CheckoutMethod";

const PaymentDetail = () => {
  return (
    <div className=" desktop:max-w-[52%] tablet:max-w-[40em] w-full flex flex-col desktop:pt-[4em] desktop:pr-[6%] desktop:pl-[5%] px-[1em] desktop:mx-0 mx-auto tablet:mt-0 mt-[1em] pb-[4em]">
      <PaymentHeader />
      <div className=" desktop:pt-0 tablet:pt-[1em]">
        <div className=" tablet:mb-[1.5em] mb-[1em]">
          <h2 className=" text-black-primary text-[1.3em] select-none">
            Thông tin giao hàng
          </h2>
        </div>
        <UserInform />
        <DeliveryMethod />
        <CheckoutMethod />
      </div>
      <div className="w-full flex tablet:flex-row flex-col-reverse items-center justify-between mt-[1.5em] border-b-[1px] border-[#ededed]">
        <a href="/cart" className="text-[#338dbc] tablet:mt-0 my-[2em]">Giỏ hàng</a>
        <button className="text-white bg-[#338dbc] transition-colors duration-200 ease-in-out p-[1.4em_1.7em] rounded-[4px] text-center tablet:w-fit w-full">
          <span>Hoàn tất đơn hàng</span>
        </button>
      </div>
      <div className="m-auto py-[1em] italic text-black">
          MAKE BY TUAN ANH  : )
      </div>
    </div>
  );
};

export default PaymentDetail;
