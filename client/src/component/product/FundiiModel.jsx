import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleBoxFundii } from "../../redux/slice/FundiiSlice";
const FundiiModel = () => {
  const { flag } = useSelector((state) => state.fundii);
  const dispatch = useDispatch();
  return (
    <div className={flag ? " select-none" : "hidden"}>
      <div
        onClick={() => dispatch(toggleBoxFundii())}
        className="w-screen h-screen bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 overflow-hidden z-[99999] text-[13px] outline-none select-none"
      />
      <div className="rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999999] h-[calc(100vh-8%)] tablet:w-[calc(100vh-5%)] w-[calc(100vw-15%)] ">
        <div className=" relative flex items-center justify-center ">
          <img
            className=" w-fit"
            src="https://assets.fundiin.vn/merchant/bnpl_desktop.png"
            alt=""
          />
          <button
            onClick={() => dispatch(toggleBoxFundii())}
            className=" absolute top-[10px] right-[30px] cursor-pointer w-[10px] "
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
        </div>
      </div>
    </div>
  );
};

export default FundiiModel;
