import React from "react";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData, sliderPhoneData } from "../assets/fakeData/sliderData";
import "swiper/css";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <div id="home-slider">
      <div className=" tablet:block hidden mt-[-110px]">
        <Swiper
          //effect={fade ? "fade" : ""}
          loop={true}
          modules={[EffectFade, Autoplay]}
          autoplay={{
            delay: 2500,
            //pauseOnMouseEnter: true,
          }}
        >
          {sliderData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <a href={item.href}>
                  {" "}
                  <img src={item.src} className="w-screen" alt="" />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className=" tablet:hidden block pt-[0px]">
        <Swiper
          //effect={fade ? "fade" : ""}
          loop={true}
          modules={[EffectFade, Autoplay]}
          autoplay={{
            delay: 2500,
            //pauseOnMouseEnter: true,
          }}
        >
          {sliderPhoneData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <a href={item.href}>
                  {" "}
                  <img src={item.src} className="w-screen" alt="" />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
