import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMark } from "../../redux/slice/MarkSlice";
import { toggleBoxSearch } from "../../redux/slice/BoxSearchSlice";
import { search } from "../../redux/slice/SearchSlice";
import SearchResult from "./SearchResult";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [key_, setKey_] = useState("");
  const flag = useSelector((state) => state.searchbox.flag);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (flag) {
      searchRef.current.classList.remove("translate-x-full");
      searchRef.current.classList.add("translate-x-0");
    } else {
      searchRef.current.classList.add("translate-x-full");
      searchRef.current.classList.remove("translate-x-0");
      dispatch(search(""));
      setKey_("");
    }
  }, [flag, dispatch]);

  useEffect(() => {
    dispatch(search(key_));
  }, [key_, dispatch]);

  return (
    <div
      id="search-box"
      ref={(el) => (searchRef.current = el)}
      className=" tablet:w-[510px] overflow-hidden w-[320px] h-screen bg-white fixed top-0 translate-x-full desktop-L:-right-[30px] right-0 z-[999] transition-all duration-500 ease-easy_  text-sm select-none"
    >
      <div className=" overflow-y-scroll w-full relative h-full">
        <div
          className=" overflow-y-scroll h-full 
        tablet:px-[70px] tablet:py-[60px] px-[15px] py-[40px] relative"
        >
          <p className=" font-medium tablet:ml-0 ml-[15px]">TÌM KIẾM</p>
          <div className="mt-[50px] mb-[8px] bg-[#f5f5f5] h-[55px] font-medium relative">
            <input
              type="text"
              className=" pl-[20px] pr-[55px] inline-block h-full outline-none bg-transparent"
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
              className=" w-[55px] h-[55px] leading-[64px] absolute top-0 right-0 flex items-center justify-center cursor-pointer opacity-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </a>
            <SearchResult key_={key_} search_bar={false} />
          </div>
        </div>

        <button
          className=" absolute tablet:top-[60px] tablet:right-[70px] top-[40px] right-[30px] hover:scale-110 transition-all duration-200 ease-linear"
          onClick={() => {
            dispatch(toggleBoxSearch());
            dispatch(toggleMark());
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
