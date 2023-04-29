import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

const SearchResult = ({ key_, search_bar }) => {
  const product = useSelector((state) => state.search.data);
  //console.log(key_)
  const searchRef = useRef(null);
  useEffect(() => {
    if(product.length !==0)
      searchRef.current.classList.remove('opacity-0')
    else
      searchRef.current.classList.add('opacity-0')
  }, [product]);
  return (
    <div
      ref={(el) => (searchRef.current = el)}
      className=" transition-all duration-300 ease-in absolute top-[calc(100%+5px)] left-0 w-full z-[999999]"
    >
      {product.map((item, index) => {
        return (
          <div
            key={index}
            className={
              index > 4
                ? "hidden"
                : "py-[10px] border-b-[1px] border-dotted border-[#dfe0e1] clear-both flex bg-white px-[5px]"
            }
          >
            <div className="w-[calc(100%-40px)] text-[14px] uppercase mr-[5px] font-medium leading-[20px]">
              <a
                href={item.imgcard.href}
                className="text-[12px] truncate mb-[4px] whitespace-pre block"
              >
                {item.title.content}
              </a>
              <p className="text-[12px] leading-[15px]">
                {item.price.saleprice}
                <del className="text-[11px] ml-[5px] text-[#797979]">
                  {item.price.realprice}
                </del>
              </p>
            </div>
            <div className="w-[40px] inline-block">
              <a href={item.imgcard.href}>
                <img src={item.imgcard.src1} alt="" />
              </a>
            </div>
          </div>
        );
      })}
      {product.length > 5 && !search_bar && (
        <div className="w-full text-center">
          <a
            href={`/search?filter=${key_}`}
            className="my-[10px] block text-[14px]"
          >
            Xem thêm {product.length - 5} sản phẩm
          </a>
        </div>
      )}
    </div>
  );
};

SearchResult.propTypes = {
  key_: PropTypes.string.isRequired,
  search_bar: PropTypes.bool.isRequired,
};

export default SearchResult;
