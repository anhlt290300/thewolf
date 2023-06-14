import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVoucherRedux,
  toggleBoxVoucher,
} from "../../redux/slice/VoucherSlice";
import VoucherCard from "./VoucherCard";

const Voucher = () => {
  const dispatch = useDispatch();

  const { data, open } = useSelector((state) => state.voucher);

  useEffect(() => {
    dispatch(getVoucherRedux());
  }, [dispatch]);

  return (
    <div className={open ? "block select-none" : "hidden"}>
      <div
        onClick={() => dispatch(toggleBoxVoucher())}
        className={
          "w-screen h-screen bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 overflow-hidden z-[99999] text-[13px] outline-none select-none"
        }
      />
      <div className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999999]">
        <div className="w-[430px] h-fit pointer-events-auto bg-white border-[1px] border-solid border-[rgba(0,0,0,0.2)] rounded-[0.5rem] flex flex-col relative">
          <button
            onClick={() => dispatch(toggleBoxVoucher())}
            className=" absolute top-[10px] right-[20px] cursor-pointer w-[10px] "
          >
            <svg
              width="20"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M2 2L22 22M22 2L2 22"
                stroke="#C0C0C0"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </svg>
          </button>
          <h3 className=" text-center text-[16px] mt-[30px] font-medium mb-[15px]">
            Mã giảm giá khi thanh toán qua Fundiin
          </h3>
          <div className=" overflow-y-auto max-h-[320px] no-scrollbar">
            {data &&
              data.length > 0 &&
              data.map((item, index) => {
                return <VoucherCard voucher={item} key={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
