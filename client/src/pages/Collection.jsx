import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import CollectionBanner from "../component/collection/CollectionBanner";
import CollectionPaging from "../component/collection/CollectionPaging";

const Collection = () => {
  return (
    <div>
      <BreadCrumb />
      <CollectionBanner />
      <CollectionPaging/>
    </div>
  );
};

export default Collection;
