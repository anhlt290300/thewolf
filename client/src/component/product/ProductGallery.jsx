import React from "react";
import PropTypes from "prop-types";

const ProductGallery = ({ product }) => {
  return (
    <div className=" col-span-6 px-[15px] select-none">
      <div className="w-full desktop:block hidden">
        <ul>
          {product.imgs.map((item, index) => {
            return (
              <li dataid={item.dataid} key={index} className=" cursor-pointer px-[50px] mb-[10px]">
                <img src={item.src} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

ProductGallery.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductGallery;
