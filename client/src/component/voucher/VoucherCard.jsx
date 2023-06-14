import React from "react";
import PropTypes from "prop-types";

const VoucherCard = ({ voucher }) => {
  const dayStart = voucher.time.start.slice(0, 10).replace(/-/g, "/");

  const dayEnd = voucher.time.end.slice(0, 10).replace(/-/g, "/");
  return (
    <div className="w-[calc(100%-40px)] m-auto pb-[30px]">
      <div className=" relative m-auto flex h-[70px] mb-[15px] shadow-slate-500 shadow-md">
        <div>
          <img
            src="https://assets.fundiin.vn/merchant/fundiin_voucher_logo.svg?20230509"
            alt=""
          />
        </div>
        <div className="px-[12px] py-[7px] flex flex-col justify-between relative">
          <div className="">
            Nhập mã{" "}
            <p className="bg-gradient-to-r from-[#F2AF36] to-[#F44233] border-[5px] border-solid border-transparent inline-block rounded-lg ">
              <span className="bg-white px-[5px] py-[1px] rounded">
                {voucher.title}
              </span>
            </p>{" "}
          </div>
          <div>
            <p>
              Giảm <strong className="mx-[2px]">{voucher.price_content}</strong> cho đơn hàng từ{" "}
              <strong className="mx-[2px]">{voucher.condition_content}đ</strong>
            </p>
          </div>
        </div>
      </div>
      <div className=" translate-x-[4px] h-[50px] relative before:absolute before:top-0 before:-left-[4px] before:w-[4px] before:h-full before:bg-[#f5f5f5]">
        <div className="pl-[10px] flex flex-col justify-evenly h-full">
          <span>
            Áp dụng từ <strong className="mx-[2px]">{dayStart}</strong> đến <strong className="mx-[2px]">{dayEnd}</strong>
          </span>
          <span>Dành cho khách hàng lần đầu thanh toán qua Fundiin</span>
        </div>
      </div>
    </div>
  );
};

VoucherCard.propTypes = {
  voucher: PropTypes.object.isRequired,
};

export default VoucherCard;
