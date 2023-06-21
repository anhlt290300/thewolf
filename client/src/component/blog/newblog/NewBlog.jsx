import React from "react";
import PropTypes from "prop-types";
import NewBlogCard from "./NewBlogCard";

const NewBlog = ({ blogs }) => {
  let blogsarr = blogs.length > 7 ? blogs.slice(0, 7) : blogs;
  return (
    <div className="mb-[30px] p-[20px] border-[1px] border-[#e3e5ec]">
      <div>
        <h2 className="text-[18px] uppercase mb-[20px] pb-[10px] border-b-[2px] border-black text-center block">
          Bài viết mới nhất
        </h2>
      </div>
      <div>
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
