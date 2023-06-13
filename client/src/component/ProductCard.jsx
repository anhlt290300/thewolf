import React from "react";
import PropTypes from "prop-types";
import { getFundii, getSalePrice } from "../utils/getTotal";

const ProductCard = ({ product }) => {
  const discount_ = `-${product.discount}%`;
  return (
    <div>
      <div className="tablet:block hidden">
        <div className="group/homecollection">
          <div className=" relative">
            <div className=" absolute top-[10px] left-[10px] text-reddiscount z-[100] text-xs font-semibold">
              {product.discount !== 0 && <span>{discount_}</span>}
            </div>
            <a href={product.imgcard.href} className=" inline-block relative">
              <img
                className=" group-hover/homecollection:opacity-0 group-hover/homecollection:z-0 opacity-100 z-10 transition-all duration-200 ease-linear absolute top-0 left-0"
                src={product.imgcard.src1}
                alt=""
              />
              <img
                className=" group-hover/homecollection:opacity-100 group-hover/homecollection:z-10 opacity-0 z-0 transition-all duration-200 ease-linear"
                src={product.imgcard.src2}
                alt=""
              />
            </a>
          </div>
          <div className="py-[20px]">
            <div className=" text-center ">
              <p className=" font-bold leading-4 text-sm mb-[5px] truncate">
                <a href={product.title.href}>{product.title.content}</a>
              </p>
              <p className=" text-black-primary">
                <span className=" text-hover-a text-sm">
                  {getSalePrice(product.price, product.discount)}
                </span>
                {product.discount !== 0 && (
                  <span className=" text-[#939393] text-[12px] ml-[5px]">
                    <del>{product.price}₫</del>
                  </span>
                )}
              </p>
              {product.buyinstallment && (
                <p className="mt-1">
                  <span className="text-xs ">
                    hoặc <b>{getFundii(product.price, product.discount)}</b> x3
                    với
                    <a
                      href={product.buyinstallment.href}
                      className=" inline-block underline ml-1"
                    >
                      <img
                        src={product.buyinstallment.src_app}
                        alt=""
                        className=" mobile-L:h-[15px] h-[12px]"
                      />
                    </a>
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="tablet:hidden block">
        <div className="group/homecollection">
          <div className=" relative">
            <div className=" absolute top-[10px] left-[10px] text-reddiscount z-[100] text-xs font-semibold">
              {product.discount !== 0 && <span>{discount_}</span>}
            </div>
            <a href={product.imgcard.href} className=" inline-block relative">
              <img
                className=" group-hover/homecollection:opacity-0 group-hover/homecollection:z-0 opacity-100 z-10 transition-all duration-200 ease-linear absolute top-0 left-0"
                src={product.imgcard.src1}
                alt=""
              />
              <img
                className=" group-hover/homecollection:opacity-100 group-hover/homecollection:z-10 opacity-0 z-0 transition-all duration-200 ease-linear"
                src={product.imgcard.src2}
                alt=""
              />
            </a>
            <div className=" inline-block absolute left-[10px] bottom-[10px] z-[30] ">
              <span className=" bg-[rgba(0,0,0,0.7)] text-white py-[2px] px-[8px] text-[10px] mr-[3px] font-medium leading-5 rounded">
                {getSalePrice(product.price, product.discount)}
              </span>
              <span className="text-[9px] ml-[5px]">
                <del>{product.price}₫</del>
              </span>
            </div>
          </div>
          <div className="py-[20px]">
            <div className=" text-center  text-[10.5px]">
              <p className=" font-bold leading-4 mb-[5px] truncate">
                <a href={product.title.href}>{product.title.content}</a>
              </p>
              {product.buyinstallment && (
                <p className="mt-1">
                  <span className=" mobile-L:text-xs mobile-M:text-[10px] text-[9px] ">
                    hoặc <b>{getFundii(product.price, product.discount)}</b> x3
                    với
                    <a
                      href={product.buyinstallment.href}
                      className=" inline-block underline ml-1"
                    >
                      <img
                        src={product.buyinstallment.src_app}
                        alt=""
                        className=" h-[12px]"
                      />
                    </a>
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
