import React from "react";
import { header } from "../../assets/fakeData/headerData";
const HeaderBottom = () => {
  return (
    <div className=" desktop:block hidden relative select-none">
      <nav className="w-full flex justify-center desktop:px-[4vw]">
        <ul className="flex justify-between w-full">
          {header.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  item.options[0].megaMenu &&
                  item.options[0].images.length === 0
                    ? " group relative"
                    : " group "
                }
              >
                <a
                  href={item.href}
                  className="flex items-center text-xs font-normal py-[10px] cursor-pointer
                hover:text-hover-a"
                >
                  <span>{item.title}</span>
                  {item.options[0].megaMenu && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-chevron-down ml-2 transition-all duration-500 ease-in-out group-hover:rotate-180"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  )}
                </a>
                {item.options[0].megaMenu &&
                  item.options[0].images.length !== 0 && (
                    <div
                      className=" group-hover:max-h-[500px] transition-all duration-500 ease-in-out max-h-0  overflow-hidden 
                    grid absolute top-full left-0 w-full group-hover:border-t-2 border-[#5c5c5c] bg-[rgba(255,255,255,0.8)]
                     grid-cols-12
                    "
                    >
                      <div className=" col-span-3 px-[15px]">
                        {item.options[0].option.map((item_, index_) => {
                          return (
                            <li
                              key={index_}
                              className=" text-xs text-[#252a2b] px-[18px] py-[9px]"
                            >
                              <a href={item_.href}>{item_.title}</a>
                            </li>
                          );
                        })}
                      </div>
                      <div className="col-span-9 px-[15px] grid grid-cols-12 text-xs">
                        {item.options[0].images.map((item__, index__) => {
                          return (
                            <div
                              key={index__}
                              className=" col-span-4 px-[30px]"
                            >
                              <a href={item__.href} className="block py-[9px]">
                                <img src={item__.src} alt="" />
                              </a>
                              <a href={item__.href} className="block py-[9px]">
                                {item__.title}
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                {item.options[0].megaMenu &&
                  item.options[0].images.length === 0 && (
                    <div
                      className=" group-hover:max-h-[500px] transition-[max-height] duration-500 ease-in-out max-h-0  overflow-hidden 
                   inline-block absolute top-full left-0 w-fit group-hover:border-t-2 border-[#5c5c5c] bg-[rgba(255,255,255,0.8)]
                  "
                    >
                      <ul>
                        {
                          item.options[0].option.map((item_,index_)=>{
                            return(
                              <li key={index_} className=" desktop-L:whitespace-nowrap desktop:last:whitespace-nowrap">
                                  <a href={item_.href} className="block text-xs px-[18px] py-[9px]">{item_.title}</a>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  )}
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBottom;
