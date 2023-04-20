import React, { useEffect, useRef } from "react";
import Header from "./component/header/Header";
import Mark from "./component/Mark";
import { useSelector } from "react-redux";
import Slider from "./component/Slider";
import HomeCollection from "./component/home/HomeCollection";
import HomeBanner from "./component/home/HomeBanner";
import HomeInfomation from "./component/home/HomeInfomation";
import Footer from "./component/Footer";

const App = () => {
  const flag = useSelector((state) => state.mark.flag);
  const mainRef = useRef(null);
  useEffect(() => {
    if (flag) {
      mainRef.current.classList.add("open");
    } else {
      mainRef.current.classList.remove("open");
    }
  }, [flag]);
  return (
    <div
      ref={(el) => (mainRef.current = el)}
      className=" font-primary group/main"
    >
      <div className="transition-all duration-500 ease-easy_ tablet:group-[.open]/main:-translate-x-[480px] group-[.open]/main:-translate-x-[320px]">
        <Header />
        <Slider />
        <HomeCollection />
        <HomeBanner />
        <HomeInfomation />
        <Footer />
        <Mark />
      </div>
    </div>
  );
};

export default App;
