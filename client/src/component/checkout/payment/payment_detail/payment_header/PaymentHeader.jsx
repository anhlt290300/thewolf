import React from "react";

const PaymentHeader = () => {
  return (
    <div className="pb-[1em]">
      <a href="/">
        <h1 className=" text-black-primary text-[2em] font-medium ">THEWOLF</h1>
      </a>
      <ul className="flex mt-[1em]">
        <li>
          <a href="/cart" className="text-[#338dbc] transition-colors ease-in-out duration-200 hover:text-[#2b78a0] brightness-[1.2]">
            Giỏ hàng
          </a>
        </li>
        <li className="px-[0.5em] flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </li>
        <li>Thông tin giao hàng</li>
      </ul>
    </div>
  );
};

export default PaymentHeader;
