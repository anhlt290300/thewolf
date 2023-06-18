import React from "react";
import Slider from '../component/Slider'
import HomeCollection from "../component/home/HomeCollection";
import HomeBanner from '../component/home/HomeBanner'
import HomeInfomation from '../component/home/HomeInfomation'
const Home = () => {

  console.log(process.env)
  return (
    <div className=" ">
      <Slider />
      <HomeCollection />
      <HomeBanner />
      <HomeInfomation />
    </div>
  );
};

export default Home;
