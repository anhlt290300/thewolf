import React from "react";
import PropTypes from "prop-types";

const NewBlogCard = ({ blog }) => {
  const { img, title, author, category, collection_ } = blog;
  return (
    <div className="flex justify-start items-start">
      <div className="w-[30%] relative">
        <a href={`/blogs/${collection_}/${category}`}>
          <img src={img} className=" max-w-full align-middle" alt={title} />
        </a>
      </div>
      <div className="w-[70%] ml-[10px] float-left">
        <a href={`/blogs/${collection_}/${category}`}>
          <h3 className="text-[14px] mb-[5px] font-medium">{title}</h3>
        </a>
        <p className="">{author.replace("Người viết: ", "")}</p>
      </div>
    </div>
  );
};

NewBlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default NewBlogCard;
