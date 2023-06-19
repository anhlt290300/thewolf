import React from "react";
import { useSelector } from "react-redux";

const DeliveryMethod = () => {
  const { province } = useSelector((state) => state.deliveryaddress);

  return (
    <div className=" tablet:mb-[3em] mb-[2em] select-none">
      <div className="mb-[1.5em] relative">
        <h2 className=" text-[#333333] text-[1.285em]">
          Phương thức vận chuyển
        </h2>
      </div>
      {!province && (
        <div className="h-fit w-full shadow-[0_0_0_1px_#d9d9d9] rounded-[4px] text-[#737373] p-[2.5em] text-center flex items-center justify-center flex-col">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iODUiIHZpZXdCb3g9IjAgMCAxMDggODUiPjxnIHN0cm9rZT0iI0IyQjJCMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xIDE4aDEwNk0xMSA3MC4zaDI2bS0yNi02aDI2bS0yNi02aDE3Ii8+PC9nPjxwYXRoIHN0cm9rZT0iI0IyQjJCMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xIDE4bDEwLjctMTdoODQuN2wxMC42IDE3djYxLjVjMCAyLjUtMiA0LjUtNC41IDQuNWgtOTdjLTIuNSAwLTQuNS0yLTQuNS00LjV2LTYxLjV6TTU0IDF2MTYuNiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==")`,
            }}
            className=" tablet:w-[108px] tablet:h-[85px] w-[68px] h-[54px] mb-[1em] bg-cover"
          />

          <p className="text-black">
            Vui lòng chọn tỉnh / thành để có danh sách phương thức vận chuyển.
          </p>
        </div>
      )}
      {province && (
        <div className="p-[1.3em] items-center cursor-pointer flex w-auto h-fit shadow-[0_0_0_1px_#d9d9d9] rounded-[4px]">
          <div className=" flex items-center pr-[1em] whitespace-nowrap justify-between w-full">
            <div className=" flex items-center">
              <input
                onChange={(e) => {}}
                type="radio"
                name="delivery"
                id=""
                checked={true}
                className="cursor-pointer appearance-none border-[#cccccc] border-[1px] mr-[0.75em] border-solid checked:bg-[#338dbc] bg-transparent rounded-full w-[18px] h-[18px] relative transition-all duration-200 ease-in-out align-[-4px]
              after:absolute after:top-1/2 after:right-1/2 after:translate-x-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[4px] after:rounded-full after:bg-transparent after:checked:bg-white after:pointer-events-none	
            "
              />
              <p>GIAO HÀNG TẬN NƠI</p>
            </div>
          </div>

          <div className=" text-[#4b4b4b]">40,000₫</div>
        </div>
      )}
    </div>
  );
};

export default DeliveryMethod;
