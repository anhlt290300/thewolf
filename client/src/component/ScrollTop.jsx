import React from "react";

const ScrollTop = () => {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button      
      onClick={() => scroll()}
      className="fixed w-[35px] h-[35px] rounded-full right-[25px] tablet:bottom-[100px] bottom-[50px] z-[99999] bg-black text-white flex items-center justify-center hover:text-hover-a"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chevron-up"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
      </svg>
    </button>
  );
};

export default ScrollTop;
