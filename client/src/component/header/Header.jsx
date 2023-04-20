import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderBottom from "./HeaderBottom";
import HeaderBottomBurger from "./HeaderBottomBurger";
import { toggleBurger } from "../../redux/slice/BurgerSlice";
import { toggleMark } from "../../redux/slice/MarkSlice";
const Header = () => {
  const dispatch = useDispatch();
  const flag = useSelector((state) => state.burger.flag);
  const burgerRef = useRef(null);
  const toggleMenu = () => {
    dispatch(toggleBurger());
    dispatch(toggleMark());
  };

  useEffect(() => {
    if (!flag) {
      burgerRef.current.classList.remove("open");
    } else {
      burgerRef.current.classList.add("open");
    }
  }, [flag]);
  return (
    <header id="header" className=" tablet:fixed block top-0 left-0 z-[999] w-full bg-white">
      <div className=" desktop:p-[10px] py-[10px] tablet:px-[15px] px-[12px] flex w-full select-none">
        <div className=" flex-1 desktop:block hidden" />
        <div className="">
          <a href="/">
            <img
              src="https://file.hstatic.net/200000033444/file/thewolf_logo-02_2dc5965c18574fc385769c4781e90d28.png"
              className="w-[50px]"
              alt=""
            />
          </a>
        </div>
        <div className=" flex-1 flex items-center justify-end desktop:text-white text-black">
          <span className="tablet:px-2 px-1">
            <a href="/account">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </a>
          </span>
          <span className="tablet:px-2 px-1 tablet:block hidden">
            <a href="/search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </a>
          </span>
          <span className=" relative tablet:px-2 px-1">
            <a href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag "
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </a>
            <span className=" absolute text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-2px)]">
              12
            </span>
          </span>
          <span
            ref={(el) => (burgerRef.current = el)}
            className=" relative items-center cursor-pointer group desktop:hidden flex"
            onClick={() => toggleMenu()}
          >
            <span
              className=" bg-black-primary relative h-1 w-7 desktop:hidden block mx-2 
           after:bg-black-primary after:h-1 after:w-7 after:absolute after:-top-2 after:right-0 after:transition-all after:duration-200 after:ease-in-out group-[.open]:after:w-4
           before:bg-black-primary before:h-1 before:w-7 before:absolute before:-bottom-2 before:right-0 before:transition-all before:duration-200 before:ease-in-out group-[.open]:before:w-5"
            />
            <span className="text-xs opacity-60 ml-2 tablet:block hidden">
              MENU
            </span>
          </span>
        </div>
      </div>
      <HeaderBottom />
      <HeaderBottomBurger />
    </header>
  );
};

export default Header;
