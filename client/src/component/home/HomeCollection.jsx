import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProductsByType } from "../../assets/fakeData/products";
import "swiper/css";

const HomeCollection = () => {
  const products = getProductsByType("the-sean-wolf-collection");
  const swipertabletRef = useRef(null);
  const swipermobileRef = useRef(null);
  return (
    <section>
      <div className="px-[15px] select-none">
        <div className=" text-base w-full my-[30px]">
          <p className="text-center tablet:text-xl text-[22px] text-black-primary tablet:leading-[1.1] leading-[1.2]">
            <a href="/collections/the-sean-wolf-collection">
              THE SEAN WOLF COLLECTION
            </a>
          </p>
        </div>
        <div className=" tablet:block hidden">
          <Swiper
            slidesPerView={3}
            loop={true}
            onBeforeInit={(el) => (swipertabletRef.current = el)}
            className=" relative"
          >
            {products.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="group/homecollection">
                    <div className=" relative">
                      <div className=" absolute top-[10px] left-[10px] text-reddiscount z-[100] text-xs font-semibold">
                        <span>{item.discount}</span>
                      </div>
                      <a
                        href={item.imgcard.href}
                        className=" inline-block relative"
                      >
                        <img
                          className=" group-hover/homecollection:opacity-0 group-hover/homecollection:z-0 opacity-100 z-10 transition-all duration-200 ease-linear absolute top-0 left-0"
                          src={item.imgcard.src1}
                          alt=""
                        />
                        <img
                          className=" group-hover/homecollection:opacity-100 group-hover/homecollection:z-10 opacity-0 z-0 transition-all duration-200 ease-linear"
                          src={item.imgcard.src2}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="py-[20px]">
                      <div className=" text-center ">
                        <p className=" font-bold leading-4 text-sm mb-[5px] truncate">
                          <a href={item.title.href}>{item.title.content}</a>
                        </p>
                        <p className=" text-black-primary">
                          <span className=" text-hover-a text-sm">
                            {item.price.saleprice}
                          </span>
                          <span className=" text-[#939393] text-[12px] ml-[5px]">
                            <del>{item.price.realprice}</del>
                          </span>
                        </p>
                        {item.buyinstallment && (
                          <p>
                            <span className=" text-xs">
                              {item.buyinstallment.content}
                              <b className="ml-[5px] text-bluebold">
                                {item.buyinstallment.app}
                              </b>
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div
              onClick={() => swipertabletRef.current?.slidePrev()}
              className=" absolute top-1/2 left-[10px] cursor-pointer z-[999] h-[22px] w-[15px] mt-[-22px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44">
                <path
                  d="M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z"
                  fill="#007aff"
                />
              </svg>
            </div>
            <div
              onClick={() => swipertabletRef.current?.slideNext()}
              className=" absolute top-1/2 right-[10px] cursor-pointer z-[999] h-[22px] w-[15px] mt-[-22px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44">
                <path
                  d="M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z"
                  fill="#007aff"
                />
              </svg>
            </div>
          </Swiper>
        </div>
        <div className=" tablet:hidden block">
          <Swiper
            spaceBetween={5}
            slidesPerView={2}
            loop={true}
            onBeforeInit={(el) => (swipermobileRef.current = el)}
            className=" relative"
          >
            {products.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="group/homecollection">
                    <div className=" relative">
                      <div className=" absolute top-[10px] left-[10px] text-reddiscount z-[100] text-xs font-semibold">
                        <span>{item.discount}</span>
                      </div>
                      <a
                        href={item.imgcard.href}
                        className=" inline-block relative"
                      >
                        <img
                          className=" group-hover/homecollection:opacity-0 group-hover/homecollection:z-0 opacity-100 z-10 transition-all duration-200 ease-linear absolute top-0 left-0"
                          src={item.imgcard.src1}
                          alt=""
                        />
                        <img
                          className=" group-hover/homecollection:opacity-100 group-hover/homecollection:z-10 opacity-0 z-0 transition-all duration-200 ease-linear"
                          src={item.imgcard.src2}
                          alt=""
                        />
                      </a>
                      <div className=" inline-block absolute left-[10px] bottom-[10px] z-[30] ">
                        <span className=" bg-[rgba(0,0,0,0.7)] text-white py-[2px] px-[8px] text-[10px] mr-[3px] font-medium leading-5 rounded">
                          {item.price.saleprice}
                        </span>
                        <span className="text-[9px]">
                          <del>{item.price.realprice}</del>
                        </span>
                      </div>
                    </div>
                    <div className="py-[20px]">
                      <div className=" text-center  text-[10.5px]">
                        <p className=" font-bold leading-4 mb-[5px] truncate">
                          <a href={item.title.href}>{item.title.content}</a>
                        </p>
                        {item.buyinstallment && (
                          <p className="">
                            <span className=" font-bold">
                              {item.buyinstallment.content}
                              <b className="ml-[5px] text-bluebold">
                                {item.buyinstallment.app}
                              </b>
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div
              onClick={() => swipermobileRef.current?.slidePrev()}
              className=" absolute top-1/2 left-[10px] cursor-pointer z-[999] h-[22px] w-[15px] mobile-M:mt-[-22px] mt-[-30px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44">
                <path
                  d="M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z"
                  fill="#007aff"
                />
              </svg>
            </div>
            <div
              onClick={() => swipermobileRef.current?.slideNext()}
              className=" absolute top-1/2 right-[10px] cursor-pointer z-[999] h-[22px] w-[15px] mobile-M:mt-[-22px] mt-[-30px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44">
                <path
                  d="M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z"
                  fill="#007aff"
                />
              </svg>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeCollection;
