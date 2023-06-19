import React from "react";
import PaymentDetail from "../component/checkout/payment/payment_detail/PaymentDetail";
import BillDetail from "../component/checkout/bill/BillDetail";

const Checkout = () => {
  return (
    <section>
      <div className="flex w-full h-full ">
        <div className=" flex desktop:flex-row flex-col-reverse justify-center w-full h-full">
          <PaymentDetail />
          <BillDetail />
          <a className=" desktop:hidden block py-[1.5em] max-w-[40em] w-full mx-auto" href="/">
            <h1 className=" text-black-primary text-[2em] font-medium inline-block px-[0.5em]">
              THEWOLF
            </h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
