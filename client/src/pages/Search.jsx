import React from "react";

import { useLoaderData } from "react-router-dom";

import SearchSlider from "../component/search/SearchSlider";

const Search = () => {
  const key = useLoaderData();

  return (
    <div className="pt-[30px]">
      <div className="px-[15px] relative">
        <div className="">
          <div
            className="pb-[30px] relative text-center 
          after:block after:bg-black-primary after:w-[60px] after:h-[4px] after:mt-[25px] after:mx-auto"
          >
            <h1 className="text-[30px] mb-[10px] font-bold text-black-primary leading-[1.2]">
              Tìm kiếm
            </h1>
            <p className="mb-[10px] leading-[21px]">
              Có <span>5 sản phẩm</span> cho tìm kiếm
            </p>
          </div>
        </div>
        <div>
          <p className="mb-[30px] leading-[21px]">
            {" "}
            Kết quả tìm kiếm cho <strong>"{key}"</strong>
          </p>
          <SearchSlider key_={key} />
        </div>
      </div>
    </div>
  );
};

export default Search;
