import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVoucherRedux,
  toggleBoxVoucher,
} from "../../redux/slice/VoucherSlice";

const VoucherBox = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.voucher);

  const [voucher, setVoucher] = useState(null);

  useEffect(() => {
    dispatch(getVoucherRedux());

    if (data.length > 0) setVoucher((voucher) => data[0]);
  }, [dispatch, data]);

  const renderVoucher = useMemo(
    () => (
      <div
        className={
          "w-fit rounded-[5px] font-medium text-white text-[16px] bg-gradient-to-r from-[#06DECD] to-[#744DEF] px-[8px] py-[3px] mt-[10px]"
        }
      >
        <div className="flex gap-x-[10px] items-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <circle cx="8" cy="8" r="8" fill="white"></circle>{" "}
            <path
              d="M7.7933 2.98566L7.79355 2.98541C7.848 2.93097 7.92184 2.90039 7.99882 2.90039C8.07581 2.90039 8.14964 2.93097 8.2041 2.98541L8.20451 2.98581L9.10849 3.88746C9.10864 3.88761 9.10879 3.88776 9.10894 3.88792C9.35056 4.12974 9.67826 4.26581 10.0201 4.26624H10.0208H11.4431C11.5201 4.26624 11.594 4.29683 11.6484 4.3513C11.7029 4.40576 11.7335 4.47964 11.7335 4.55667V5.97912V5.97924C11.7336 6.32112 11.8693 6.649 12.1109 6.89089L12.1113 6.89124L13.015 7.79425C13.015 7.79428 13.0151 7.79432 13.0151 7.79435C13.0695 7.8488 13.1 7.92262 13.1 7.99959C13.1 8.07661 13.0694 8.15047 13.015 8.20493L13.0149 8.20503L12.1128 9.10795C12.1126 9.10815 12.1124 9.10836 12.1122 9.10856C11.8692 9.35063 11.7335 9.67886 11.7335 10.0209V11.4433C11.7335 11.5203 11.7029 11.5942 11.6484 11.6487C11.594 11.7031 11.5201 11.7337 11.4431 11.7337H10.0208H10.0206C9.67874 11.7338 9.35087 11.8696 9.109 12.1112L9.10865 12.1116L8.2057 13.0154C8.15124 13.0698 8.07741 13.1004 8.00042 13.1004C7.92344 13.1004 7.8496 13.0698 7.79515 13.0154L7.79505 13.0153L6.8922 12.1132C6.89206 12.113 6.89193 12.1129 6.8918 12.1128C6.64973 11.8696 6.32141 11.7337 5.9793 11.7337H4.55695C4.39634 11.7337 4.26658 11.604 4.26658 11.4433V10.0209C4.26658 10.0209 4.26658 10.0209 4.26658 10.0209C4.2666 9.85153 4.23327 9.68385 4.1685 9.52739C4.10371 9.37091 4.00874 9.22872 3.889 9.10894L3.8888 9.10874L2.98505 8.20573C2.985 8.20568 2.98495 8.20563 2.9849 8.20558C2.93056 8.15113 2.90002 8.07734 2.90002 8.00039C2.90002 7.92337 2.93061 7.84951 2.98505 7.79505L2.98546 7.79464L3.88704 6.8906C3.88716 6.89048 3.88727 6.89036 3.88739 6.89024C4.12926 6.6486 4.26535 6.32085 4.26578 5.97895V5.97832V4.55587C4.26578 4.47883 4.29638 4.40496 4.35084 4.3505C4.4053 4.29603 4.47915 4.26544 4.55615 4.26544L5.9785 4.26544L5.97913 4.26544C6.32104 4.26501 6.6488 4.12889 6.89042 3.887C6.89054 3.88689 6.89065 3.88677 6.89076 3.88666L7.7933 2.98566Z"
              fill="white"
              stroke="url(#paint0_linear_1133_3470)"
            ></path>{" "}
            <path
              d="M6.75299 6.50741C6.75299 6.64367 6.64255 6.75408 6.50638 6.75408C6.37021 6.75408 6.25977 6.64367 6.25977 6.50741C6.25977 6.37114 6.37021 6.26074 6.50638 6.26074C6.64255 6.26074 6.75299 6.37114 6.75299 6.50741ZM9.73945 9.49408C9.73945 9.63034 9.629 9.74074 9.49283 9.74074C9.35667 9.74074 9.24622 9.63034 9.24622 9.49408C9.24622 9.35781 9.35667 9.24741 9.49283 9.24741C9.629 9.24741 9.73945 9.35781 9.73945 9.49408Z"
              fill="white"
              stroke="url(#paint1_linear_1133_3470)"
            ></path>{" "}
            <path
              d="M10.2395 6.15625L6.52905 9.86694"
              stroke="#00C7C7"
              strokeWidth="0.5"
              strokeLinecap="round"
            ></path>{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_1133_3470"
                x1="2.40002"
                y1="8.00039"
                x2="13.6"
                y2="8.00039"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stopColor="#00E6CB"></stop>{" "}
                <stop offset="1" stopColor="#744DEF"></stop>{" "}
              </linearGradient>{" "}
              <linearGradient
                id="paint1_linear_1133_3470"
                x1="5.75977"
                y1="6.38296"
                x2="5.75976"
                y2="10.2407"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stopColor="#00E6CB"></stop>{" "}
                <stop offset="1" stopColor="#744DEF"></stop>{" "}
              </linearGradient>{" "}
            </defs>{" "}
          </svg>
          {voucher && (
            <p className="text-left">
              Nhập mã {voucher.title && <strong>{voucher.title}</strong>} để
              giảm{" "}
              {voucher.price_content && (
                <strong>{voucher.price_content}</strong>
              )}{" "}
              cho ĐH
              {voucher.condition_content && (
                <strong> {voucher.condition_content}đ. </strong>
              )}{" "}
              <span
                onClick={() => dispatch(toggleBoxVoucher())}
                className=" text-[18px] underline cursor-pointer hover:no-underline hover:text-black-primary transition-all duration-100 ease-in"
              >
                Xem thêm
              </span>
            </p>
          )}
        </div>
      </div>
    ),
    [voucher, dispatch]
  );

  return <div>{renderVoucher}</div>;
};

export default VoucherBox;
