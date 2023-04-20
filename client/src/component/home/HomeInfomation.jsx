import React from "react";

const HomeInfomation = () => {
  return (
    <section>
      <div className="py-[5px] text-center">
        <p className="my-[30px] text-base leading-[1.6]">
          THE FLEXIBILITY CONCEPT
        </p>
      </div>
      <div className=" tablet:px-[30px]">
        <a href="/">
          <iframe
            title="THE FLEXIBILITY CONCEPT - TALKSHOW WITH LUNG NGUYEN | THEWOLF.VN"
            allowFullScreen="1"
            aallow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            width="100%"
            className=" desktop-L:h-[780px] desktop:h-[540px] tablet:h-[400px] mobile-L:h-[240px] mobile-M:h-[210px] h-[180px]"
            src="https://www.youtube.com/embed/kfqs0XCwrQI?autoplay=1&controls=0&modestbranding=0&rel=0&loop=1&playlist=kfqs0XCwrQI&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fthewolf.vn&widgetid=1"
          />
        </a>
      </div>
    </section>
  );
};

export default HomeInfomation;
