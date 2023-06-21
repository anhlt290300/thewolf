import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import { useLoaderData } from "react-router-dom";
import parse from "html-react-parser";
const Blog = () => {
  const { author, content, img, title } = useLoaderData();
  return (
    <div>
      <BreadCrumb />
      <div className="pt-[30px] px-[15px] w-full">
        <div className="border-b-[0.5px] border-[#999]">
          <div>
            <img
              className="max-w-full w-full align-middle"
              src={img}
              alt={title}
            />
          </div>
          <h1 className="my-[20px] text-[24px] font-medium leading-[1.2]">
            {title}
          </h1>
          <ul className="mb-[10px]">
            <li>{author}</li>
            <li></li>
          </ul>
        </div>
        <div className=" text-center py-[30px] list-disc">
            {parse(`${content}`)}
        </div>
      </div>
    </div>
  );
};

export default Blog;
