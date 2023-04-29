import React, { useState } from "react";

import { useLoaderData, useNavigate } from "react-router-dom";

import SearchSlider from "../component/search/SearchSlider";
import { getProductByKey } from "../assets/fakeData/products";

const Search = () => {
  const key = useLoaderData();
  const products = getProductByKey(key);
  const [string, setString] = useState("");
  const navigate = useNavigate();

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
            {products.length !== 0 && (
              <p className="mb-[10px] leading-[21px]">
                Có <span>{products.length} sản phẩm</span> cho tìm kiếm
              </p>
            )}
          </div>
        </div>
        {products.length !== 0 && (
          <div>
            <p className="mb-[30px] leading-[21px]">
              {" "}
              Kết quả tìm kiếm cho <strong>"{key}"</strong>
            </p>
            <SearchSlider key_={key} products={products} />
          </div>
        )}
        {products.length === 0 && (
          <div className="pb-[30px] text-center">
            <h2 className=" font-semibold text-[22px] mb-[13px]">
              Không tìm thấy nội dung bạn yêu cầu
            </h2>
            <div className="mb-[40px]">
              <span>
                Không tìm thấy <strong>"{key}"</strong>
              </span>
              .
              <span>
                {" "}
                Vui lòng kiểm tra chính tả, sử dụng các từ tổng quát hơn và thử
                lại!
              </span>
            </div>
            <div className="w-[60%] m-auto">
              <div className=" inline-block w-full">
                <input
                  type="text"
                  className="w-[calc(100%-55px)] h-[55px] outline-none px-[20px] bg-[#ededed]"
                  name=""
                  id=""
                  onChange={(el) => setString(el.target.value)}
                  onKeyDown={(el) => {
                    if (el.keyCode === 13) {
                      navigate(`/search?filter=${string}`);
                    }
                  }}
                />
                <a
                  href={`/search?filter=${string}`}
                  style={{
                    backgroundImage: `url('https://theme.hstatic.net/200000033444/1000979633/14/iconsearch.png?v=206')`,
                  }}
                  className="w-[55px] h-[55px] float-right bg-center bg-no-repeat bg-black-primary cursor-pointer"
                ><span></span></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
