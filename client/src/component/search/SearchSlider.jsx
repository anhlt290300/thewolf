import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";
import Paging from "../collection/Paging";

const SearchSlider = ({ key_, products }) => {
  const searchParams = useSearchParams();
  const [currentpage, setCurrentPage] = useState(1);
  const [lastpage, setLastPage] = useState(1);
  const [productRender, setProductRender] = useState([]);
  const url = useLocation().pathname + `?filter=${key_}&`;

  useEffect(() => {
    let params = [];
    searchParams[0].forEach((value, key) => {
      params.push({
        key: key,
        value: value,
      });
    });
    params.forEach((el) => {
      if (
        el.key === "page" &&
        Number(el.value) === Number(el.value) &&
        Number(el.value) > 1
      ) {
        setCurrentPage(Number(el.value));
      }
    });
    let count = products.length / 10;
    setLastPage(Math.round(count + 0.5));
  }, [products, searchParams]);

  useEffect(() => {
    let arr = products.filter((el, i) => {
      if (currentpage === 1) {
        if (i < 10) return el;
        else return false;
      } else if (currentpage < lastpage) {
        if (i >= (currentpage - 1) * 10 && i < currentpage * 10) return el;
        else return false;
      } else if (currentpage === lastpage) {
        if (i >= (lastpage - 1) * 10) return el;
        else return false;
      } else {
        return false;
      }
    });
    setProductRender(arr);
  }, [currentpage, lastpage]);

  return (
    <div>
      <div className="grid desktop:grid-cols-5 grid-cols-2 gap-[30px]">
        {productRender.map((item, index) => {
          return (
            <div key={index}>
              <ProductCard product={item} />
            </div>
          );
        })}
      </div>
      <Paging currentpage={currentpage} lastpage={lastpage} url={url} />
    </div>
  );
};

SearchSlider.propTypes = {
  key_: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default SearchSlider;
