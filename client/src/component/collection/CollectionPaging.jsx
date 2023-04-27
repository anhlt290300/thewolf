import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useSearchParams } from "react-router-dom";
import CollectionProducts from "./CollectionProducts";
import Paging from "./Paging";

const CollectionPaging = (props) => {
  const searchParams = useSearchParams();
  const [curretnpage, setCurrentPage] = useState(1);
  const [lastpage, setLastPage] = useState(1);
  const products = useLoaderData();
  const url = useLocation().pathname + "?";
  const [productRender, setProductRender] = useState([]);
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

    let count = products.length / 20;
    setLastPage(Math.round(count + 0.5));
  }, [products, searchParams]);

  useEffect(() => {
    let arr = products.filter((el, i) => {
      if (curretnpage === 1) {
        if (i < 20) return el;
        else return false;
      } else if (curretnpage < lastpage) {
        if (i >= (curretnpage - 1) * 20 && i < curretnpage * 20) return el;
        else return false;
      } else if (curretnpage === lastpage) {
        if (i >= (lastpage - 1) * 20) return el;
        else return false;
      } else {
        return false;
      }
    });
    setProductRender(arr);
  }, [curretnpage, lastpage, products]);
  return (
    <section>
      <CollectionProducts products={productRender} />
      <Paging currentpage={curretnpage} lastpage={lastpage} url={url} />
    </section>
  );
};

export default CollectionPaging;
