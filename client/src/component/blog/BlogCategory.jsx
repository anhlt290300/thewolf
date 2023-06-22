import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAllBlogCollection } from "../../api/blogs";

const BlogCategory = (props) => {
  const [blogCollection, setBlogCollection] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const getAPI = async () => {
      let data = await getAllBlogCollection();
      //console.log(data);
      setBlogCollection(data);
    };
    getAPI();
  }, []);
  return (
    <div className="mb-[30px] p-[20px] border-[1px] border-[#e3e5ec]">
      <div onClick={() => setOpen((open) => !open)}>
        <h2 className="text-[18px] uppercase mb-[20px] pb-[10px] border-b-[2px] border-black text-center block">
          <span>DANH MỤC BLOG</span>
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
            ? "max-h-[500px] overflow-hidden transition-all duration-500 ease-in-out"
            : "max-h-[0px] overflow-hidden transition-all duration-500 ease-in-out"
        }
      >
        {blogCollection &&
          blogCollection.length !== 0 &&
          blogCollection.map((item, index) => {
            return (
              <ul key={index}>
                <li>
                  <a
                    className="block pl-0 p-[5px] font-medium text-[14px] leading-[28px] uppercase tracking-[1px]"
                    href={`/blogs/${item.title}`}
                  >
                    {item.content}
                  </a>
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
};

BlogCategory.propTypes = {};

export default BlogCategory;
