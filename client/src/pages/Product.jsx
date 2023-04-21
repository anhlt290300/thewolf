import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import ProductDescription from "../component/product/ProductDescription";
import { useLoaderData } from "react-router-dom";
import ProductGallery from "../component/product/ProductGallery";
import ProductBuy from "../component/product/ProductBuy";

const Product = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div>
      <BreadCrumb />
      <section>
        <div className="py-[30px] w-full">
          <div className=" desktop:grid desktop:grid-cols-12 w-full">
            <ProductDescription product={product} />
            <ProductGallery product={product} />
            <ProductBuy product={product} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
