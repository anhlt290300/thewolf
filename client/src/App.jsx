import React, { useEffect, useRef } from "react";
import Header from "./component/header/Header";
import Mark from "./component/Mark";
import { useSelector } from "react-redux";
import Footer from "./component/Footer";
import ErrorPage from "./component/ErrorPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import ScrollTop from "./component/ScrollTop";
import { getProductsByType } from "./assets/fakeData/products";
import Collection from "./pages/Collection";

const App = () => {
  const flag = useSelector((state) => state.mark.flag);
  const mainRef = useRef(null);
  useEffect(() => {
    if (flag) {
      mainRef.current.classList.add("open");
    } else {
      mainRef.current.classList.remove("open");
    }
  }, [flag]);
  return (
    <div className=" relative">
      <ScrollTop />
      <div
        ref={(el) => (mainRef.current = el)}
        className=" font-primary group/main"
      >
        <div className="transition-all duration-500 ease-easy_ tablet:group-[.open]/main:-translate-x-[480px] group-[.open]/main:-translate-x-[320px]">
          <Header />
          <Outlet />
          <Footer />
          <Mark />
        </div>
      </div>
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={
        <>
          <Header />
          <ErrorPage />
          <Footer />
        </>
      }
    >
      <Route index element={<Home />} />
      <Route
        path="/collections/:type"
        loader={({ params }) => {
          let type = params.type;
          let item =
            getProductsByType(type)
          if (item === undefined) {
            throw new Response("Bad Request", { status: 400 });
          } else return item;
        }}
        element={<Collection />}
        errorElement={<ErrorPage />}
      />
      {/* <Route path="/product-list" element={<ProductsPage />} />      
      <Route path="/your-cart/" element={<Cart />} />
      <Route path="/promotion/clearance-sale/" element={<Promotion />} />
      <Route path="/discoveryou/" element={<Discoveryou />} />
      <Route path="/coming-soon/" element={<ComingSoon />} />
      <Route path="/your-wishlist/" element={<Wishlist />} /> */}
    </Route>
  )
);

export default router;
