import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { addItem } from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import { toggleBoxCart } from "../../redux/slice/BoxCartSlice";
import { toggleMark } from "../../redux/slice/MarkSlice";
import Quantity from "../cart/Quantity";
import { getFundii, getSalePrice } from "../../utils/getTotal";
import Voucher from "./Voucher";

const ProductBuy = ({ product }) => {
  const discount_ = `-${product.discount}%`;
  const [quantity, setQuantity] = useState(1);
  const sizeRef = useRef(null);

  const dispatch = useDispatch();
  const toggleQuantity = (key) => {
    if (key === "add") {
      setQuantity((quantity) => quantity + 1);
    } else {
      if (quantity === 1) return;
      else setQuantity((quantity) => quantity - 1);
    }
  };

  return (
    <div className=" col-span-4 px-[15px] select-none">
      <div className=" desktop:sticky top-[60%] desktop:-translate-y-[calc(33.33%+40px)] left-0 w-full">
        <div className=" pb-[10px]  block border-b-[1px] border-[#ccc] border-solid">
          <p className=" font-bold text-[18px] mb-[5px] text-black-primary ">
            {product.title.content}
          </p>
          <span className=" text-[11px] font-medium text-[#a3a5a7] leading-[1.4]">
            SKU: <span className=" font-light">{product.code}</span>
          </span>
          {product.colors.color && product.colors.title !== "null" && (
            <div className="">
              <div className=" tablet:pb-[8px] pb-[15px] text-[13px] text-left ">
                <span className="text-[11px]">{product.colors.title}</span>
              </div>

              <span
                style={{
                  backgroundColor: `${product.colors.color.replace(
                    "none",
                    ""
                  )}`,
                }}
                className=" inline-block w-[18px] h-[18px] rounded-full ring-1 ring-[#808284] ring-offset-2"
              />
            </div>
          )}
          {product.soldout !== 0 && (
            <span className=" text-sm text-black leading-[1.4] ml-[5px]">
              Hết hàng
            </span>
          )}
        </div>
        <div className=" desktop:pr-[10px] pb-[10px]  mt-[10px] text-center">
          {product.discount !== 0 && (
            <span className="py-[5px] px-[15px] bg-[#ededed] text-hover-a font-semibold text-xs inline-block mr-[10px]">
              {discount_}
            </span>
          )}
          <span className="text-[22px] opacity-[0.95] font-bold">
            {getSalePrice(product.price, product.discount)}
          </span>
          {product.discount !== 0 && (
            <del className="text-[11px] text-[#777a7b] pl-[10px] font-medium">
              {product.price}₫
            </del>
          )}
          <div className=" text-left flex items-center mt-[10px]">
            <b>
              Mua trả sau từ{" "}
              <span className=" bg-gradient-to-b from-[#06DECD] to-[#744DEF] bg-clip-text text-transparent">
                {getFundii(product.price, product.discount)}
              </span>{" "}
              với{" "}
            </b>
            <div className="flex cursor-pointer ml-2">
              <svg
                className="fdn-long-logo"
                width="65"
                height="30"
                viewBox="0 0 56 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <rect
                  width="55.5556"
                  height="20"
                  rx="3"
                  fill="url(#paint0_linear_361_10484)"
                ></rect>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.4754 8.98207C19.609 8.97303 19.743 8.99269 19.8684 9.03972C19.9938 9.08674 20.1077 9.16004 20.2024 9.25469C20.2971 9.34934 20.3704 9.46316 20.4174 9.58848C20.4645 9.71381 20.4841 9.84774 20.4751 9.9813V14.2705C20.4841 14.4041 20.4645 14.538 20.4174 14.6634C20.3704 14.7887 20.2971 14.9025 20.2024 14.9971C20.1077 15.0918 19.9938 15.1651 19.8684 15.2121C19.743 15.2591 19.609 15.2788 19.4754 15.2697C19.3373 15.2755 19.1995 15.2532 19.0703 15.2041C18.9411 15.155 18.8232 15.0802 18.7238 14.9843L18.615 14.8755L18.4722 14.9843C18.0769 15.2282 17.6168 15.3467 17.1528 15.3241C16.7863 15.3418 16.4208 15.2735 16.0855 15.1248C15.7501 14.9761 15.4542 14.751 15.2213 14.4676C14.7493 13.8958 14.5069 13.1689 14.5412 12.4284V9.96091C14.5561 9.70553 14.6681 9.4655 14.8543 9.28995C15.0404 9.11441 15.2867 9.01663 15.5426 9.01663C15.7986 9.01663 16.0449 9.11441 16.231 9.28995C16.4172 9.4655 16.5292 9.70553 16.5441 9.96091V12.391C16.5441 13.2849 16.9352 13.4616 17.5098 13.4616C17.6474 13.4669 17.7845 13.4444 17.9131 13.3953C18.0417 13.3463 18.159 13.2717 18.258 13.1761C18.4469 12.9587 18.5487 12.679 18.5436 12.391V9.96091C18.5237 9.83194 18.5336 9.70012 18.5726 9.57558C18.6116 9.45105 18.6787 9.33712 18.7687 9.24257C18.8587 9.14803 18.9692 9.07538 19.0917 9.03021C19.2142 8.98505 19.3455 8.96858 19.4754 8.98207Z"
                  fill="white"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.4839 8.98188C25.8504 8.96426 26.2159 9.03254 26.5512 9.18125C26.8866 9.32996 27.1825 9.555 27.4154 9.83837C27.8874 10.4102 28.1298 11.1371 28.0955 11.8776V14.3451C28.0806 14.6005 27.9686 14.8405 27.7824 15.0161C27.5963 15.1916 27.35 15.2894 27.0941 15.2894C26.8381 15.2894 26.5918 15.1916 26.4056 15.0161C26.2195 14.8405 26.1075 14.6005 26.0926 14.3451V11.9116C26.0926 11.0177 25.7015 10.841 25.1268 10.841C24.9893 10.8357 24.8522 10.8582 24.7236 10.9073C24.595 10.9564 24.4777 11.0309 24.3787 11.1265C24.2 11.3477 24.1102 11.6277 24.1271 11.9116V14.3417C24.1122 14.5971 24.0002 14.8371 23.814 15.0127C23.6278 15.1882 23.3816 15.286 23.1256 15.286C22.8697 15.286 22.6234 15.1882 22.4372 15.0127C22.2511 14.8371 22.1391 14.5971 22.1242 14.3417V10.0525C22.1148 9.91709 22.1349 9.78125 22.1831 9.65437C22.2313 9.52749 22.3066 9.41258 22.4035 9.31758C22.5005 9.22258 22.617 9.14976 22.7449 9.10413C22.8728 9.05849 23.0091 9.04113 23.1443 9.05326C23.2823 9.04865 23.4198 9.07152 23.5488 9.12053C23.6778 9.16955 23.7958 9.24372 23.8958 9.33874L24.0013 9.4475L24.1441 9.37614C24.5422 9.11604 25.0082 8.9789 25.4839 8.98188Z"
                  fill="white"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.8585 9.05366C38.9924 9.04411 39.1268 9.06339 39.2526 9.11018C39.3784 9.15698 39.4927 9.2302 39.5878 9.32491C39.6829 9.41962 39.7566 9.5336 39.8038 9.65918C39.851 9.78477 39.8708 9.91903 39.8617 10.0529V14.3761C39.8696 14.5125 39.8496 14.649 39.8029 14.7773C39.7562 14.9057 39.6837 15.0231 39.5899 15.1225C39.4961 15.2218 39.383 15.301 39.2576 15.3551C39.1321 15.4092 38.9969 15.4371 38.8602 15.4371C38.7236 15.4371 38.5884 15.4092 38.4629 15.3551C38.3374 15.301 38.2243 15.2218 38.1305 15.1225C38.0368 15.0231 37.9643 14.9057 37.9175 14.7773C37.8708 14.649 37.8508 14.5125 37.8588 14.3761V10.0189C37.8502 9.88697 37.8705 9.75479 37.9182 9.63149C37.9659 9.50819 38.0399 9.39676 38.135 9.30491C38.2302 9.21307 38.3442 9.14301 38.4691 9.09962C38.594 9.05624 38.7269 9.04055 38.8585 9.05366Z"
                  fill="white"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.6434 9.05363C42.777 9.0446 42.911 9.06424 43.0364 9.11126C43.1618 9.15828 43.2756 9.23158 43.3703 9.32623C43.4651 9.42089 43.5384 9.5347 43.5854 9.66003C43.6325 9.78536 43.6522 9.91931 43.6431 10.0529V14.3761C43.6511 14.5124 43.6311 14.6489 43.5843 14.7773C43.5376 14.9056 43.4651 15.0231 43.3713 15.1224C43.2776 15.2218 43.1645 15.3009 43.039 15.355C42.9135 15.4091 42.7783 15.437 42.6417 15.437C42.505 15.437 42.3698 15.4091 42.2443 15.355C42.1188 15.3009 42.0057 15.2218 41.912 15.1224C41.8182 15.0231 41.7457 14.9056 41.699 14.7773C41.6522 14.6489 41.6322 14.5124 41.6402 14.3761V10.0189C41.635 9.8875 41.6577 9.75653 41.7068 9.63456C41.7559 9.51258 41.8302 9.40237 41.925 9.31119C42.0198 9.22001 42.1328 9.14993 42.2566 9.10553C42.3804 9.06114 42.5122 9.04345 42.6434 9.05363Z"
                  fill="white"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.7882 8.98188C49.1546 8.96426 49.5201 9.03254 49.8555 9.18125C50.1909 9.32996 50.4868 9.555 50.7197 9.83837C51.1917 10.4102 51.4341 11.1371 51.3998 11.8776V14.3451C51.3849 14.6005 51.2729 14.8405 51.0867 15.0161C50.9005 15.1916 50.6542 15.2894 50.3983 15.2894C50.1424 15.2894 49.8961 15.1916 49.7099 15.0161C49.5237 14.8405 49.4117 14.6005 49.3968 14.3451V11.9116C49.3968 11.0177 49.0024 10.841 48.4311 10.841C48.2936 10.8357 48.1564 10.8582 48.0278 10.9073C47.8993 10.9564 47.782 11.0309 47.683 11.1265C47.5042 11.3477 47.4145 11.6277 47.4313 11.9116V14.3417C47.4164 14.5971 47.3044 14.8371 47.1183 15.0127C46.9321 15.1882 46.6858 15.286 46.4299 15.286C46.1739 15.286 45.9277 15.1882 45.7415 15.0127C45.5553 14.8371 45.4433 14.5971 45.4284 14.3417V10.0525C45.4193 9.91863 45.4391 9.78437 45.4863 9.65879C45.5336 9.5332 45.6072 9.41922 45.7023 9.32451C45.7974 9.2298 45.9117 9.15658 46.0375 9.10979C46.1633 9.063 46.2977 9.04372 46.4316 9.05326C46.5691 9.04795 46.7063 9.0705 46.8348 9.11956C46.9634 9.16862 47.0807 9.24318 47.1797 9.33874L47.2885 9.4475L47.4313 9.37614C47.8343 9.11281 48.3067 8.97554 48.7882 8.98188Z"
                  fill="white"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.1725 6.16133C35.0388 6.15172 34.9045 6.17099 34.7789 6.2178C34.6532 6.26462 34.5391 6.33791 34.4443 6.43268C34.3494 6.52746 34.2761 6.64149 34.2293 6.76708C34.1824 6.89267 34.1632 7.02687 34.1728 7.16056V9.33914L33.8837 9.1964C33.5163 9.02299 33.1133 8.93803 32.7071 8.9483C32.3122 8.93936 31.9199 9.01409 31.5559 9.16757C31.1919 9.32104 30.8646 9.54979 30.5954 9.83877C30.0167 10.4719 29.709 11.3064 29.7385 12.1635C29.7158 13.0073 30.0232 13.8266 30.5954 14.4475C30.862 14.7425 31.1879 14.9779 31.5518 15.1384C31.9157 15.2989 32.3094 15.3808 32.7071 15.3787C33.2232 15.3889 33.7315 15.2522 34.1728 14.9845L34.3156 14.8757L34.421 15.0184C34.5133 15.1261 34.629 15.2111 34.7593 15.2671C34.8895 15.323 35.0309 15.3484 35.1725 15.3413C35.3045 15.3499 35.4368 15.3296 35.5602 15.2819C35.6835 15.2342 35.795 15.1603 35.8869 15.0652C35.9788 14.9701 36.0489 14.8562 36.0923 14.7313C36.1357 14.6065 36.1514 14.4736 36.1383 14.3421V7.20474C36.1383 6.55219 35.7982 6.16133 35.1725 6.16133ZM33.8123 13.1627C33.7077 13.2877 33.5765 13.3877 33.4282 13.4553C33.2799 13.5229 33.1184 13.5565 32.9554 13.5536C32.7961 13.5655 32.6362 13.5411 32.4878 13.4822C32.3393 13.4234 32.2062 13.3315 32.0984 13.2137C31.8673 12.9251 31.7467 12.5636 31.7584 12.1941C31.745 12.0088 31.7698 11.8227 31.8312 11.6473C31.8927 11.4719 31.9894 11.311 32.1154 11.1745C32.224 11.0568 32.3578 10.9651 32.5067 10.9062C32.6557 10.8474 32.816 10.8229 32.9758 10.8346C33.1388 10.8317 33.3003 10.8652 33.4486 10.9329C33.5969 11.0005 33.7281 11.1005 33.8327 11.2255C34.0763 11.5014 34.2042 11.8604 34.1898 12.2281C34.1666 12.5738 34.0344 12.9034 33.8123 13.1695V13.1627Z"
                  fill="white"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.8589 6.33783C39.0961 6.33783 39.3236 6.432 39.4913 6.59963C39.659 6.76726 39.7533 6.99464 39.7533 7.23171C39.7533 7.46878 39.659 7.69613 39.4913 7.86376C39.3236 8.0314 39.0961 8.12556 38.8589 8.12556C38.6217 8.12556 38.3943 8.0314 38.2265 7.86376C38.0588 7.69613 37.9646 7.46878 37.9646 7.23171C37.9646 6.99464 38.0588 6.76726 38.2265 6.59963C38.3943 6.432 38.6217 6.33783 38.8589 6.33783Z"
                  fill="white"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.6434 6.33811C42.8805 6.33811 43.108 6.43228 43.2757 6.59992C43.4435 6.76755 43.5377 6.99493 43.5377 7.232C43.5377 7.46907 43.4435 7.69643 43.2757 7.86406C43.108 8.0317 42.8805 8.12586 42.6434 8.12586C42.5226 8.13936 42.4004 8.12555 42.2857 8.08541C42.1711 8.04526 42.0669 7.97981 41.981 7.89395C41.8951 7.80809 41.8297 7.70402 41.7895 7.58943C41.7493 7.47483 41.7355 7.35267 41.749 7.232C41.7386 7.11201 41.7547 6.99119 41.7959 6.87804C41.8372 6.76488 41.9028 6.66212 41.988 6.57695C42.0732 6.49179 42.176 6.42628 42.2892 6.38503C42.4024 6.34377 42.5233 6.32775 42.6434 6.33811Z"
                  fill="white"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.11492 13.054C7.44681 13.054 7.76509 13.1857 7.99978 13.4203C8.23446 13.6549 8.36631 13.973 8.36631 14.3047C8.36631 14.6364 8.23446 14.9545 7.99978 15.1891C7.76509 15.4237 7.44681 15.5554 7.11492 15.5554H5.41465C5.08276 15.5554 4.76445 15.4237 4.52977 15.1891C4.29509 14.9545 4.16323 14.6364 4.16323 14.3047C4.16323 13.973 4.29509 13.6549 4.52977 13.4203C4.76445 13.1857 5.08276 13.054 5.41465 13.054H7.11492Z"
                  fill="white"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.117 8.75137C11.4394 8.75622 11.7475 8.88527 11.977 9.11161C12.2066 9.33795 12.3398 9.64409 12.349 9.96623C12.3582 10.2884 12.2427 10.6016 12.0265 10.8407C11.8102 11.0798 11.51 11.2262 11.1884 11.2494H5.40748C5.08507 11.2446 4.77698 11.1155 4.54744 10.8892C4.31791 10.6629 4.18463 10.3567 4.17543 10.0346C4.16622 9.71242 4.28177 9.39916 4.498 9.16009C4.71424 8.92102 5.01446 8.77461 5.33606 8.75137H11.117Z"
                  fill="white"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.514 4.44485C14.8459 4.43538 15.168 4.55808 15.4093 4.78594C15.6507 5.01381 15.7916 5.32818 15.8011 5.6599C15.8106 5.99162 15.6878 6.31351 15.4598 6.55476C15.2318 6.79601 14.9173 6.93686 14.5854 6.94633H5.40398C5.07319 6.94279 4.75695 6.80988 4.52303 6.57608C4.28911 6.34229 4.15613 6.02621 4.15259 5.69559C4.15841 5.37778 4.28253 5.07354 4.50071 4.84227C4.7189 4.61101 5.01547 4.46931 5.33256 4.44485H14.514Z"
                  fill="white"
                ></path>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_361_10484"
                    x1="0"
                    y1="2.77778"
                    x2="-1.62926e-06"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stopColor="#00E6CB"></stop>{" "}
                    <stop offset="1" stopColor="#744DEF"></stop>{" "}
                  </linearGradient>{" "}
                </defs>{" "}
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                {" "}
                <path
                  d="M13.5 7C13.5 8.72391 12.8152 10.3772 11.5962 11.5962C10.3772 12.8152 8.72391 13.5 7 13.5C5.27609 13.5 3.62279 12.8152 2.40381 11.5962C1.18482 10.3772 0.5 8.72391 0.5 7C0.5 5.27609 1.18482 3.62279 2.40381 2.40381C3.62279 1.18482 5.27609 0.5 7 0.5C8.72391 0.5 10.3772 1.18482 11.5962 2.40381C12.8152 3.62279 13.5 5.27609 13.5 7Z"
                  fill="url(#paint0_linear_1276_3000)"
                  fillOpacity="0.1"
                  stroke="url(#paint1_linear_1276_3000)"
                ></path>{" "}
                <path
                  d="M5.16124 5.69318H5.71271C5.80496 5.69318 5.87848 5.61765 5.89052 5.52607C5.95068 5.08757 6.25148 4.76805 6.78757 4.76805C7.24613 4.76805 7.66592 4.99733 7.66592 5.5488C7.66592 5.97326 7.41592 6.16845 7.02086 6.46524C6.571 6.79211 6.21471 7.1738 6.24012 7.79345L6.24212 7.9385C6.24282 7.98236 6.26074 8.02418 6.292 8.05494C6.32327 8.08571 6.36537 8.10295 6.40923 8.10294H6.95135C6.99567 8.10294 7.03817 8.08533 7.06951 8.054C7.10085 8.02266 7.11846 7.98015 7.11846 7.93583V7.86564C7.11846 7.3857 7.30094 7.24599 7.79359 6.87233C8.20068 6.56283 8.62514 6.21925 8.62514 5.49799C8.62514 4.48797 7.7722 4 6.83838 4C5.99145 4 5.06364 4.39438 5.00014 5.52807C4.99923 5.54966 5.00274 5.57121 5.01046 5.59139C5.01818 5.61157 5.02994 5.62996 5.04503 5.64542C5.06012 5.66089 5.07821 5.6731 5.0982 5.68131C5.11818 5.68953 5.13964 5.69357 5.16124 5.69318ZM6.71538 10C7.12314 10 7.40322 9.73663 7.40322 9.38035C7.40322 9.01136 7.12247 8.75201 6.71538 8.75201C6.32501 8.75201 6.04092 9.01136 6.04092 9.38035C6.04092 9.73663 6.32434 10 6.71538 10Z"
                  fill="url(#paint2_linear_1276_3000)"
                ></path>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_1276_3000"
                    x1="2.6077e-08"
                    y1="7"
                    x2="14"
                    y2="7"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stopColor="#00E6CB"></stop>{" "}
                    <stop offset="0.859375" stopColor="#744DEF"></stop>{" "}
                  </linearGradient>{" "}
                  <linearGradient
                    id="paint1_linear_1276_3000"
                    x1="2.6077e-08"
                    y1="7"
                    x2="14"
                    y2="7"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stopColor="#00E6CB"></stop>{" "}
                    <stop offset="0.859375" stopColor="#744DEF"></stop>{" "}
                  </linearGradient>{" "}
                  <linearGradient
                    id="paint2_linear_1276_3000"
                    x1="3.5"
                    y1="7"
                    x2="8.62514"
                    y2="7"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stopColor="#00E6CB"></stop>{" "}
                    <stop offset="0.859375" stopColor="#744DEF"></stop>{" "}
                  </linearGradient>{" "}
                </defs>{" "}
              </svg>
            </div>
          </div>
          <Voucher />
        </div>

        <div className="flex w-full justify-center items-center">
          {product.sizes && product.sizes !== "null" && (
            <div className="w-1/3 mr-[30px]">
              <span className="block h-[35px] align-middle overflow-hidden max-w-full">
                <select
                  name=""
                  id="abc"
                  ref={(el) => (sizeRef.current = el)}
                  className="w-full h-full border-[1px] border-solid border-[#333] outline-none text-[11px]"
                >
                  {parse(`${product.sizes}`)}
                </select>
              </span>
            </div>
          )}
          {/* <div className="mb-[10px]">
          <div className="my-[6px] text-[11px] pb-[3px] border-b-[2px] border-black-primary inline-block">
            <button>
              <span>Hướng dẫn chọn size</span>
            </button>
          </div>
        </div> */}
          <Quantity
            quantity={quantity}
            toggleQuantity={toggleQuantity}
            type="product"
          />
        </div>
        <div
          className={
            product.soldout !== 1
              ? "group/soldout"
              : "group/soldout open"
          }
        >
          <button
            onClick={
              product.soldout !== 1
                ? () => {
                    dispatch(
                      addItem({
                        id: product.code,
                        size: sizeRef.current?.options[
                          sizeRef.current.selectedIndex
                        ].value,
                        quantity: quantity,
                      })
                    );
                    dispatch(toggleBoxCart());
                    dispatch(toggleMark());
                  }
                : () => {}
            }
            className="px-[35px] py-[8px] w-full rounded-full text-[14px] font-bold uppercase text-white group-[.open]/soldout:opacity-80 hover:text-black-primary leading-[22px] border-[1px] border-solid border-white hover:border-black-primary bg-black-primary hover:bg-white transition-all ease-in duration-200"
          >
            {product.soldout !== 1 ? "Thêm vào giỏ" : "Hết hàng"}
          </button>
        </div>
        <div className="mt-[15px] mb-[10px] rounded-[12px] border-[1px] border-solid border-[#ccc] p-[10px]">
          <div className="h-[40px] flex items-center text-xs tracking-[1px] py-[10px] mb-[5px]">
            <img
              className="h-[35px]"
              src="https://theme.hstatic.net/200000033444/1000979633/14/img_item_service_1.png?v=205"
              alt=""
            />
            <p className="text-[11px] leading-[22px] text-[#1c1c1] ml-[25px] cursor-pointer">
              HƯỚNG DẪN{" "}
              <strong>
                <b>CHỌN SIZE</b>
              </strong>
            </p>
          </div>
          <div className="h-[40px] flex items-center text-xs tracking-[1px] py-[10px] mb-[5px]">
            <img
              className="h-[35px]"
              src=" https://theme.hstatic.net/200000033444/1001050940/14/img_item_service_2.png?v=108"
              alt=""
            />
            <a
              className="text-[11px] leading-[22px] text-[#1c1c1] ml-[25px]"
              href={product.title.href}
            >
              NHÂN VIÊN GỌI ĐIỆN TƯ VẤN TRỰC TIẾP{" "}
              <strong>
                <b></b>
              </strong>
            </a>
          </div>
          <div className="h-[40px] flex items-center text-xs tracking-[1px] py-[10px]  mb-[5px]">
            <img
              className="h-[35px]"
              src="https://theme.hstatic.net/200000033444/1000979633/14/img_item_service_3.png?v=205"
              alt=""
            />
            <a
              className="text-[11px] leading-[22px] text-[#1c1c1] ml-[25px]"
              href="/pages/lien-he"
            >
              HỆ THỐNG CỬA HÀNG -{" "}
              <strong>
                <b>LIÊN HỆ</b>
              </strong>
            </a>
          </div>
          <div className="h-[40px] flex items-center text-xs tracking-[1px] py-[10px]  mb-[5px]">
            <img
              className="h-[35px]"
              src="https://theme.hstatic.net/200000033444/1000979633/14/img_item_service_4.png?v=205"
              alt=""
            />
            <a
              className="text-[11px] leading-[22px] text-[#1c1c1] ml-[25px]"
              href="/pages/chinh-sach-doi-hang"
            >
              HỖ TRỢ ĐỔI SIZE{" "}
              <strong>
                <b>- SẢN PHẨM LỖI</b>
              </strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBuy.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductBuy;
