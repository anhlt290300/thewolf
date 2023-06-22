import React from "react";
import PropTypes from "prop-types";

const BlogCard = ({ blog }) => {
  const {
    author,
    category,
    collection_,
    content_trailer,
    img,
    title,
  } = blog;
  return (
    <div className="w-full desktop:grid flex flex-col grid-cols-12 desktop:gap-[30px] gap-[15px]">
      <div className=" col-span-4">
        <a href={`/blogs/${collection_}/${category}`}>
          <img src={img} alt={title} className=" overflow-clip" />
        </a>
      </div>
      <div className=" col-span-8">
        <h3 className="mb-[13px] text-[16px] text-black-primary font-medium">{title}</h3>
        <div className="text-[#999] mb-[15px]">{author}</div>
        <p className=" leading-[21px] mb-[10px]">{content_trailer}</p>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogCard;
