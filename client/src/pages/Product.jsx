import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import ProductDescription from "../component/product/ProductDescription";
import { useLoaderData } from "react-router-dom";
import ProductGallery from "../component/product/ProductGallery";
import ProductBuy from "../component/product/ProductBuy";
import Voucher from "../component/voucher/Voucher";
import FundiiModel from "../component/product/FundiiModel";

const Product = () => {
  const product = useLoaderData();
  //console.log(product);
  return (
    <div>
      <Voucher />
      <FundiiModel />
      <BreadCrumb />
      <section>
        <div className="py-[30px] w-full">
          <div className=" desktop:grid desktop:grid-cols-12 flex flex-col w-full">
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
