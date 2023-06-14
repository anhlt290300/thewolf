import PropTypes from "prop-types";
import React from "react";
import ProductCard from "../ProductCard";
import { useParams } from "react-router-dom";

const CollectionProducts = ({ products }) => {
  const title = useParams().type.replaceAll("-", " ").toUpperCase();

  return (
    <div className="w-full">
      <div className="tablet:px-[15px] px-0">
        <div className=" text-sm leading-[1.4] text-black-primary">
          <div className=" desktop:my-[50px] my-[20px]">
            <div className="px-[15px] text-center desktop:text-2xl text-xl font-bold leading-[1.2]">
              <span>{title}</span>
            </div>
          </div>
        </div>
        <div className="grid desktop:grid-cols-4 grid-cols-2">
          {products.length !== 0 &&
            products.map((item, index) => {
              return (
                <div key={index} className="bg-white mb-[10px] desktop:px-[15px] px-[5px]">
                  <ProductCard product={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

CollectionProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CollectionProducts;
