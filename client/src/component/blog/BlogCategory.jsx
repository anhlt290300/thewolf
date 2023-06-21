import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAllBlogCollection } from "../../api/blogs";

const BlogCategory = (props) => {
  const [blogCollection, setBlogCollection] = useState(null);

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
      <div>
        <h2 className="text-[18px] uppercase mb-[20px] pb-[10px] border-b-[2px] border-black text-center block">
          DANH MỤC BLOG
        </h2>
      </div>
      <div>
        {blogCollection &&
          blogCollection.length !== 0 &&
          blogCollection.map((item, index) => {
            return (
              <ul key={index}>
                <li>
                  <a className="block pl-0 p-[5px] font-medium text-[14px] leading-[28px] uppercase tracking-[1px]" href={`/blogs/${item.title}`}>{item.content}</a>
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
