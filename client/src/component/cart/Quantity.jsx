import React from "react";
import PropTypes from "prop-types";

const Quantity = ({ quantity, toggleQuantity, type }) => {
  return (
    <div className={type !== "cart" ? "mt-[15px]" : ""}>
      <div
        className={
          type !== "cart" ? "mb-[15px] flex items-center" : "flex items-center"
        }
      >
        <button
          onClick={() => toggleQuantity("minus")}
          className={
            type !== "cart"
              ? "w-[32px] h-[32px] bg-[#f5f5f5] font-semibold text-center flex justify-center items-center"
              : "w-[32px] h-[32px] bg-transparent font-semibold text-center flex justify-center items-center border-[1px] border-solid border-[#dadada]"
          }
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </span>
        </button>
        <div
          className={
            type !== "cart"
              ? "w-[70px] h-[32px] font-semibold flex justify-center items-center border-[1px] border-[#f5f5f5] border-solid rounded-[1px]"
              : "w-[35px] h-[33px] font-semibold flex justify-center items-center bg-[#dadbdd] border-y-[1px] border-[#f5f5f5] border-solid rounded-[1px]"
          }
        >
          <span>{quantity}</span>
        </div>
        <button
          onClick={() => toggleQuantity("add")}
          className={
            type !== "cart"
              ? "w-[32px] h-[32px] bg-[#f5f5f5] font-semibold text-center flex justify-center items-center"
              : "w-[32px] h-[32px] bg-transparent font-semibold text-center flex justify-center items-center border-[1px] border-solid border-[#dadada]"
          }
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired,
  toggleQuantity: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Quantity;
