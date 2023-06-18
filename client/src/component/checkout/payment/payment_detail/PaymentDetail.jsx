import React from "react";
import PaymentHeader from "./payment_header/PaymentHeader";
import UserInform from "../UserInform";
import DeliveryMethod from "./checkout_menthod/DeliveryMethod";
import CheckoutMethod from "./checkout_menthod/CheckoutMethod";

const PaymentDetail = () => {
  return (
    <div className="w-[46%] flex flex-col flex-[1_0_auto] pt-[4em] pr-[6%] pl-[5%]">
      <PaymentHeader />
      <div className="pb-[4em]">
        <div className="mb-[1.5em]">
          <h2 className=" text-black-primary text-[1.3em]">
            Thông tin giao hàng
          </h2>
        </div>
        <UserInform />
        <DeliveryMethod />
        <CheckoutMethod />
      </div>
    </div>
  );
};

export default PaymentDetail;
