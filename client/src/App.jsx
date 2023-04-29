import React, { useEffect, useRef } from "react";
import Header from "./component/header/Header";
import Mark from "./component/Mark";
import { useSelector } from "react-redux";
import Footer from "./component/Footer";
import ErrorPage from "./component/ErrorPage";
import HeaderBottomBurger from "./component/header/HeaderBottomBurger";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import ScrollTop from "./component/ScrollTop";
import {
  getProductsByHref,
  getProductsByType,
} from "./assets/fakeData/products";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import CartBox from "./component/cart/CartBox";
import Cart from "./pages/Cart";
import SearchBox from "./component/search/SearchBox";
import Search from "./pages/Search";
import HeaderSearchBar from "./component/header/HeaderSearchBar";

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
          <HeaderSearchBar/>
          <Outlet />
          <Footer />
          <Mark />
        </div>
      </div>
      <HeaderBottomBurger />
      <CartBox />
      <SearchBox />
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
          let param = params.type;

          let type = param.slice(param.indexOf("?") + 1);
          let item = getProductsByType(type);
          //console.log(type);
          if (item.length === 0) {
            throw new Response("Bad Request", { status: 400 });
          } else return item;
        }}
        element={<Collection />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/products/:type"
        loader={({ params }) => {
          let href = "/products/" + params.type;

          let item = getProductsByHref(href);
          //console.log(href);
          if (item.length === 0) {
            throw new Response("Bad Request", { status: 400 });
          } else return item[0];
        }}
        element={<Product />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/search"
        loader={({ request }) => {
          //let dispatch = useDispatch();
          let search = new URL(request.url).search.replace("?", "");
          if (search.indexOf("filter") === -1) {
            console.log('a')
            return null;
          } else {
            let arr = search.split('&')
            let item
            arr.forEach(el=>{
              if(el.indexOf('filter')!==-1){
                item = el.split('=')
              }
            })
            if(item[1]===undefined)
              return null
            else
              return item[1]
          }
        }}
        element={<Search />}
        errorElement={<ErrorPage />}
      />
      <Route path="/cart/" element={<Cart />} />
    </Route>
  )
);

export default router;
