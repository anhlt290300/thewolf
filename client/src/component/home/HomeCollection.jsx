import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProductsByType } from "../../assets/fakeData/products";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const HomeCollection = () => {
  const products = getProductsByType("the-sean-wolf-collection");

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
            navigation
            modules={[Navigation]}
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
                          <span className=" text-hover-a text-sm">{item.price.saleprice}</span>
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
          </Swiper>
        </div>
        <div className=" tablet:hidden block">
          <Swiper
            spaceBetween={5}
            slidesPerView={2}
            loop={true}
            navigation
            modules={[Navigation]}
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
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeCollection;
