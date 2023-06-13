import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const ProductGallery = ({ product }) => {
  return (
    <div className=" col-span-5 px-[15px] select-none">
      <div className="w-full desktop:block hidden">
        <ul>
          {product.imgs.map((item, index) => {
            return (
              <li
                dataid={item.dataid}
                key={index}
                className=" cursor-pointer px-[50px] mb-[10px]"
              >
                <img src={item.src} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" desktop:hidden block">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          loop={true}
          slidesPerView={1}
          className="max-h-[70vw ]"
        >
          {product.imgs.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <li className=" cursor-pointer tablet:px-[50px] px-[15px] tablet:max-h-[60vw] max-h-[100vw] overflow-hidden flex items-center justify-center">
                  {" "}
                  <img src={item.src} className="w-full " alt="" />
                </li>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className=" tablet:px-[30px] tablet:pb-[0] pb-[15px]">
          <iframe
            width="100%"
            className=" tablet:h-[50vw] h-[55vw]"
            src="https://www.youtube.com/embed/i8Iux8vgqV4?autoplay=1&mute=1&controls=0&modestbranding=0&rel=0&loop=1&playlist=i8Iux8vgqV4&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fthewolf.vn&widgetid=1"
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="UNBOXING THE CHUNKY CHELSEA BOOT BLACK | THEWOLF.VN"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

ProductGallery.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductGallery;
