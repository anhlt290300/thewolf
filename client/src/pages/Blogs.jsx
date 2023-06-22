import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import { useLoaderData } from "react-router-dom";
import NewBlog from "../component/blog/newblog/NewBlog";
import BlogCategory from "../component/blog/BlogCategory";
import BlogCard from "../component/blog/BlogCard";

const Blogs = () => {
  const { title, data } = useLoaderData();
  //console.log(data);
  return (
    <div>
      <BreadCrumb />
      <div className="pt-[30px]  desktop:grid flex flex-col grid-cols-12 desktop:gap-[30px] gap-0  px-[15px]">
        <div className=" col-span-3">
          <NewBlog blogs={data} />
          <BlogCategory />
        </div>

        <div className=" col-span-9">
          <div>
            <h1 className=" text-[30px] font-bold mb-[30px] tablet:text-left text-center
             tablet:after:w-0 after:w-[60px] after:h-[4px] after:block after:bg-black-primary after:mx-auto after:mt-[25px]
            ">{title}</h1>
          </div>
          <div className="w-full">
            {data &&
              data.map((item, index) => {
                return (
                  <div
                    className="mb-[25px] clear-both block w-full"
                    key={index}
                  >
                    <BlogCard blog={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
