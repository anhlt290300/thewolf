import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

const accountlist = [
  {
    title: "Thông tin tài khoản",
    href: "/account",
  },
  {
    title: "Danh sách địa chỉ",
    href: "/account/addresses",
  },
  {
    title: "Đăng xuất",
    href: "/account/logout",
  },
];

const Account = () => {
  const user = useLoaderData();
  //console.log(user)
  return (
    <div className="pb-[50px]">
      <div className="text-center px-[15px] py-[30px] mb-[60px] border-b-[1px] border-[#ededed] border-solid">
        <h1
          className="text-[45px] font-bold text-center
        after:block after:w-[60px] after:h-[4px] after:mx-auto after:mt-[50px] after:bg-black-primary
        "
        >
          Tài khoản của bạn
        </h1>
      </div>
      <div className="px-[15px]">
        <div className="grid grid-cols-12">
          <div className=" col-span-3 relative px-[15px]">
            <h3 className=" uppercase mb-[30px] text-[15px] font-bold tracking-[1px]">
              Tài khoản
            </h3>
            <ul className="">
              {accountlist.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className=" block py-[5px] relative before:inline-block before:text-[16px] before:content-['_↗'] before:mr-[8px]"
                      href={item.href}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" col-span-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
