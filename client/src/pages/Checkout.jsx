import React from "react";
import PaymentDetail from "../component/checkout/payment/payment_detail/PaymentDetail";
import BillDetail from "../component/checkout/bill/BillDetail";

const Checkout = () => {
  return (
    <section>
      <div className="flex">
        <div className="w-[90%]  flex flex-[1_0_auto] ">
          <PaymentDetail />
          <BillDetail />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
