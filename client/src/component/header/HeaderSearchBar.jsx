import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/slice/SearchSlice";
import SearchResult from "../search/SearchResult";
import { useNavigate } from "react-router-dom";

const HeaderSearchBar = () => {
  const dispatch = useDispatch();
  const [key_, setKey_] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(search(key_));
  }, [key_, dispatch]);

  return (
    <div
      id="search-bar"
      className=" tablet:hidden block w-full bg-white z-[999] text-sm select-none"
    >
      <div className=" w-full relative h-full">
        <div
          className=" h-full 
           p-[5px] relative"
        >
          <div className="bg-[#f5f5f5] h-[30px] font-medium relative">
            <input
              type="text"
              name=""
              id=""
              className=" pl-[20px] pr-[55px] inline-block h-full outline-none bg-transparent text-[12px]"
              placeholder="Tìm kiếm sản phẩm..."
              onChange={(el) => setKey_(el.target.value)}
              onKeyDown={(el) => {
                if (el.keyCode === 13) {
                  navigate(`/search?filter=${key_}`);
                  window.location.reload();
                }
              }}
            />
            <a
              href={`/search?filter=${key_}`}
              className=" w-[55px] h-[30px] leading-[64px] absolute top-0 right-0 flex items-center justify-center cursor-pointer opacity-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </a>
            <SearchResult key_={key_} search_bar={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchBar;
