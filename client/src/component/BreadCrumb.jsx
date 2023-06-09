import React from "react";
import { useParams } from "react-router-dom";

const BreadCrumb = () => {
  const type = useParams().type?.replaceAll("-", " ").toUpperCase();
  // const top = useLocation().pathname.slice(
  //   1,
  //   useLocation().pathname.lastIndexOf("/")
  // );

  return (
    <div className="bg-[#f5f5f5] w-full select-none font-normal">
      <div className="px-[15px] ">
        <ol className="flex justify-start items-center text-black-primary text-[12px] py-[10px]">
          <li>
            <a href="/">Trang chủ</a>
          </li>
          <li className=" inline-block before:content-['/']  before:text-[#777] before:px-[10px] before:text-[12px]">
            <a href="/collections/">Danh mục</a>
          </li>
          <li className=" inline-block before:content-['/']  before:text-[#777] before:px-[10px] before:text-[12px]">
            <span className="text-[#777]">{type}</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BreadCrumb;
