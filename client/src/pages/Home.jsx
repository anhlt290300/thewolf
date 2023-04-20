import React from "react";
import Slider from '../component/Slider'
import HomeCollection from "../component/home/HomeCollection";
import HomeBanner from '../component/home/HomeBanner'
import HomeInfomation from '../component/home/HomeInfomation'
const Home = () => {
  return (
    <div className=" -translate-y-[110px]">
      <Slider />
      <HomeCollection />
      <HomeBanner />
      <HomeInfomation />
    </div>
  );
};

export default Home;
