import { getBannerForType } from "../../assets/fakeData/collectionsBanner";
import { useParams } from "react-router-dom";

const CollectionBanner = () => {
  const type = useParams().type;
  const banner = getBannerForType(type)[0];
  //console.log(banner);
  return (
    <section>
      <div className="w-full">
        <img src={banner.src} alt="" />
      </div>
    </section>
  );
};

export default CollectionBanner;
