import React, { useState } from "react";
import PropTypes from "prop-types";
import NewBlogCard from "./NewBlogCard";

const NewBlog = ({ blogs }) => {
  let blogsarr = blogs.length > 7 ? blogs.slice(0, 7) : blogs;

  const [open, setOpen] = useState(false);
  return (
    <div className="mb-[30px] p-[20px] border-[1px] border-[#e3e5ec]">
      <div onClick={() => setOpen((open) => !open)}>
        <h2 className="text-[18px] uppercase mb-[20px] pb-[10px] border-b-[2px] border-black text-center block">
          <span>Bài viết mới nhất</span>
          <div
            className={
              open
                ? " inline-block ml-[4px] tablet:hidden transition-transform duration-500 ease-in-out rotate-180"
                : " inline-block ml-[4px] tablet:hidden transition-transform duration-500 ease-in-out"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </h2>
      </div>
      <div
        className={
          open
            ? "max-h-[750px] overflow-hidden transition-all duration-500 ease-in-out"
            : "max-h-[0px] overflow-hidden transition-all duration-500 ease-in-out"
        }
      >
        {blogsarr.map((item, index) => {
          return (
            <div key={index} className="py-[15px]">
              <NewBlogCard blog={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

NewBlog.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default NewBlog;
