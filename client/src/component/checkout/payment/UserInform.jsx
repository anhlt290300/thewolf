import React, { useEffect, useState } from "react";
import InputUser from "./payment_detail/user_inform/InputUser";
import DeliveryAddress from "./payment_detail/user_inform/DeliveryAddress";
import { useLoaderData } from "react-router-dom";
import { logout } from "../../../api/user";

const UserInform = () => {
  const user = useLoaderData();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  useEffect(() => {
    if (user) {
      setName(user.firstname + " " + user.lastname);
      setEmail(user.email);
    }
  }, [user]);
  return (
    <div className="mb-[2em] select-none">
      {!user && (
        <p className="mb-[1.5em]">
          Bạn đã có tài khoản?{" "}
          <a
            className="text-[#338dbc] transition-colors ease-in-out duration-200 hover:text-[#2b78a0] brightness-[1.2]"
            href="/account/login?urlredirect=checkout"
          >
            Đăng nhập
          </a>
        </p>
      )}
      {user && (
        <div className="mb-[1.5em] w-full flex">
          <div
            style={{
              backgroundImage: `url(
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48dGl0bGU+QXJ0Ym9hcmQ8L3RpdGxlPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGg1MHY1MEgwVjB6IiBmaWxsPSIjRDhEOEQ4Ii8+PHBhdGggZD0iTTI1LjEwMyAyNi4yNDJjMy4yMTIgMCA1LjY0Mi0yLjkyIDUuNjQyLTYuNzg3IDAtMy4wODYtMi41OC01LjcwNS01LjY0Mi01LjcwNS0zLjA2IDAtNS42NCAyLjYyLTUuNjQgNS43MDUgMCAzLjg2NiAyLjQzIDYuNzg3IDUuNjQgNi43ODd6bTAtMTAuNTRjMS45NTIgMCAzLjY3OCAxLjc2MyAzLjY3OCAzLjc1MyAwIDIuNzU3LTEuNTc0IDQuODM1LTMuNjc3IDQuODM1LTIuMTAzIDAtMy42NzctMi4wNzgtMy42NzctNC44MzUgMC0xLjk5IDEuNzI2LTMuNzUzIDMuNjc3LTMuNzUzem0tOC40NSAyMC42MTVsLjE3Ny0xLjg3N2MuMzktMy43NzggNC42OTctNC42MSA4LjI3My00LjYxIDMuNTc3IDAgNy44ODQuODMyIDguMjc0IDQuNTk4bC4xNzYgMS44OWgyLjAxNWwtLjE3Ni0yLjA4Yy0uNDQtNC4xMTctNC4wNjgtNi4zODQtMTAuMjktNi4zODQtNi4yMiAwLTkuODQ2IDIuMjY3LTEwLjI4NyA2LjM5N2wtLjE3NiAyLjA2N2gyLjAxNHoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+"
              )`,
            }}
            className="w-[50px] h-[50px] min-w-[50px] overflow-hidden bg-cover rounded-[8px] mr-[1em] "
          />
          <div className="w-full pt-[0.25em] align-middle text-[1.1em]">
            {name && email && <p>{name + " (" + email + ")"}</p>}
            <a
              className="text-[#338dbc] transition-colors ease-in-out duration-200 hover:text-[#2b78a0] brightness-[1.2]"
              href="/checkouts"
              onClick={() => logout()}
            >
              Đăng xuất
            </a>
          </div>
        </div>
      )}
      <div className=" ">
        {user && (
          <div className=" relative  select-none active group/deliveryuser mb-[0.9em]">
            <label
              className=" absolute top-0 w-full p-[0_0.93em] text-[0.85em] translate-y-[3px] pointer-events-none text-[#9999] transition-all duration-200 ease-in-out m-[0.5em_0] mt-[0.3em] opacity-0
      group-[.active]/deliveryuser:opacity-100 group-[.active]/deliveryuser:transform-none group-[.active]/deliveryuser:text-[#737373] z-[999]"
            >
              Thêm địa chỉ mới...
            </label>
            <select
              // onChange={(e) => {
              //   const code = e.target.value;
              //   //console.log(code);
              //   setValue(() => code);
              // }}
              className="relative select-none appearance-none outline-none rounded-[4px] shadow-[0_0_0_1px_#d9d9d9] text-[#333] font-medium focus:shadow-[0_0_0_2px_#338dbc] w-full p-[0.94em_2em_0.94em_0.8em] transition-all duration-200 ease-in-out break-normal
        group-[.active]/deliveryuser:pt-[1.5em] group-[.active]/deliveryuser:pb-[0.38em]"
            >
              <option value="null">Địa chỉ đã lưu trữ</option>
            </select>
            <div className=" absolute top-1/2 -translate-y-1/2 right-[10px] border-gray-400 border-l-[1px] pl-[7px] pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill text-gray-500"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
          </div>
        )}
        <InputUser title="Họ và tên" type="text" />
        <div className="grid tablet:grid-cols-3 grid-cols-1 my-[0.9em] gap-[0.9em]">
          {!user && (
            <div className=" tablet:col-span-2">
              <InputUser title="Email" type="email" />
            </div>
          )}
          <div className={user ? " col-span-3" : " tablet:col-span-1"}>
            <InputUser title="Số điện thoại" type="number" />
          </div>
        </div>
        <InputUser title="Địa chỉ" type="text" />
        <div className="grid tablet:grid-cols-3 grid-cols-1 my-[0.9em] gap-[0.9em]">
          <DeliveryAddress type="tinh" />
          <DeliveryAddress type="huyen" />
          <DeliveryAddress type="xa" />
        </div>
      </div>
    </div>
  );
};

export default UserInform;
