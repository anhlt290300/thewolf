import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { header, burgeroption } from "../../assets/fakeData/headerData";
import { toggleBurger } from "../../redux/slice/BurgerSlice";
import { toggleMark } from "../../redux/slice/MarkSlice";
const HeaderBottomBurger = () => {
  const dispatch = useDispatch()
  const flag = useSelector((state) => state.burger.flag);
  const burgerRef = useRef(null);
  useEffect(() => {
    // if (flag) {
    //   burgerRef.current.classList.remove("translate-x-full");
    //   burgerRef.current.classList.add("translate-x-0");
    // } else {
    //   burgerRef.current.classList.add("translate-x-full");
    //   burgerRef.current.classList.remove("translate-x-0");
    // }
  }, [flag]);

  const optionsRef = useRef([]);

  const toggleOption = (index) => {
    optionsRef.current.forEach((el, i) => {
      if (index !== i) {
        el.classList.remove("open");
      } else el.classList.toggle("open");
    });
  };
  return (
    <div
      ref={(el) => (burgerRef.current = el)}
      className=" tablet:w-[480px] w-[320px] h-screen bg-white fixed top-0 translate-x-full right-0 z-[999] transition-all duration-500 ease-easy_  text-sm select-none"
    >
      <div className=" overflow-y-scroll w-full relative h-full">
        <div
          className=" overflow-y-scroll h-full 
        tablet:px-[70px] tablet:py-[60px] px-[30px] py-[40px] "
        >
          <p>MENU</p>
          <div className="mt-[60px]">
            <nav>
              <ul className="text-xs font-semibold mb-[40px]">
                {header.map((item, index) => {
                  return (
                    <div
                      ref={(el) => (optionsRef.current[index] = el)}
                      key={index}
                      className="mb-[5px] group"
                    >
                      <li className="h-[35px] relative">
                        <p className="w-[calc(100%-16px)]">
                          <a href={item.href}>{item.title}</a>
                        </p>
                        {item.options[0].megaMenu && (
                          <span
                            className=" absolute top-0 right-0"
                            onClick={() => toggleOption(index)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down opacity-100 transition-all duration-300 ease-linear group-[.open]:rotate-180 group-[.open]:opacity-0"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </span>
                        )}
                      </li>
                      {item.options[0].megaMenu && (
                        <ul className=" max-h-0 overflow-hidden transition-all duration-300 ease-linear group-[.open]:max-h-[200px] block">
                          {item.options[0].option.map((item_, index_) => {
                            return (
                              <li key={index_} className="py-[8px] pl-[25px]">
                                <a href={item_.href}>{item_.title}</a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </ul>
              <ul className=" text-black-primary text-xs">
                {burgeroption.map((item, index) => {
                  return (
                    <li key={index} className=" mb-[12px]">
                      <a href={item.href}>{item.title}</a>
                    </li>
                  );
                })}
                <li className="mt-[50px] mb-[12px]">
                  <a href="/account/login" className=" flex items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-person-circle mr-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                    </span>
                    <span>Đăng nhập</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className=" text-xs mt-[200px] mb-[30px]">
            <p className=" opacity-60 font-light">
              Copyright © 2023 <a href="/">THEWOLF</a>
            </p>
          </div>
        </div>

        <button className=" absolute tablet:top-[60px] tablet:right-[70px] top-[40px] right-[30px] hover:scale-110 transition-all duration-200 ease-linear"
        onClick={()=>{
          dispatch(toggleBurger())
          dispatch(toggleMark())
        }}>
          <span></span>
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

export default HeaderBottomBurger;
