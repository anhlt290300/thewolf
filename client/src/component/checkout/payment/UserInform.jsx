import React from "react";
import InputUser from "./payment_detail/user_inform/InputUser";
import DeliveryAddress from "./payment_detail/user_inform/DeliveryAddress";

const UserInform = () => {
  return (
    <div className="mb-[2em]">
      <p className="mb-[1.5em]">
        Bạn đã có tài khoản?{" "}
        <a
          className="text-[#338dbc] transition-colors ease-in-out duration-200 hover:text-[#2b78a0] brightness-[1.2]"
          href="/account"
        >
          Đăng nhập
        </a>
      </p>
      <div className=" ">
        <InputUser title="Họ và tên" type="text" />
        <div className="grid grid-cols-3 my-[0.9em] gap-[0.9em]">
          <div className=" col-span-2">
            <InputUser title="Email" type="email" />
          </div>
          <div className=" col-span-1">
            <InputUser title="Số điện thoại" type="number" />
          </div>
        </div>
        <InputUser title="Địa chỉ" type="text" />
        <div className="grid grid-cols-3 my-[0.9em] gap-[0.9em]">
          <DeliveryAddress type="tinh" />
          <DeliveryAddress type="huyen" />
          <DeliveryAddress type="xa" />
        </div>
      </div>
    </div>
  );
};

export default UserInform;
