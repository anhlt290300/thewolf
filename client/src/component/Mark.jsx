import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMark } from "../redux/slice/MarkSlice";
import { unableBurger } from "../redux/slice/BurgerSlice";
import { unableBoxCart } from "../redux/slice/BoxCartSlice";

const Mark = () => {
  const dispatch = useDispatch();
  const flag = useSelector((state) => state.mark.flag);
  const flagCartBox = useSelector(state=>state.cartbox.flag)
  const markRef = useRef(null);
  useEffect(() => {
    if (flag) {
      markRef.current.classList.remove("hidden");
      setTimeout(() => {
        markRef.current.classList.remove("opacity-0");
        markRef.current.classList.add("opacity-100");
        markRef.current.classList.add("visible");
      }, 10);
    } else {
      markRef.current.classList.add("opacity-0");
      setTimeout(() => markRef.current.classList.add("hidden"), 200);
      markRef.current.classList.remove("opacity-100");
      markRef.current.classList.remove("visible");
    }
    //console.log(flag)
  }, [flag]);
  return (
    <div
      ref={(el) => (markRef.current = el)}
      className="w-screen h-screen bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 transition-all duration-200 ease-linear z-[7777] hidden"
      onClick={() => {
        dispatch(toggleMark());
        dispatch(unableBurger());
        dispatch(unableBoxCart())
      }}
    />
  );
};

export default Mark;
