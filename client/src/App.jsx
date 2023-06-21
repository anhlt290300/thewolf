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
  redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import ScrollTop from "./component/ScrollTop";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import CartBox from "./component/cart/CartBox";
import Cart from "./pages/Cart";
import SearchBox from "./component/search/SearchBox";
import Search from "./pages/Search";
import HeaderSearchBar from "./component/header/HeaderSearchBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import AboutUser from "./component/user/AboutUser";
import Addresses from "./component/user/Addresses";
import Checkout from "./pages/Checkout";
import Blogs from "./pages/Blogs";
import { checkUser, getUser, logout } from "./api/user";
import { getProductByTitle, getProductByType } from "./api/product";

import store from "./redux/store";
import {
  getAllBlogs,
  getBlogByCategory,
  getBlogByCollection,
} from "./api/blogs";
import Blog from "./pages/Blog";

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
          <HeaderSearchBar />
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
    <Route>
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
          loader={async ({ params }) => {
            let param = params.type;

            let type = param.slice(param.indexOf("?") + 1);
            let products = await getProductByType({ type });
            //console.log(products)
            if (products.length === null) {
              throw new Response("Bad Request", { status: 400 });
            } else return products;
          }}
          element={<Collection />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/products/:title"
          loader={async ({ params }) => {
            let title = params.title;

            let product = await getProductByTitle({ title });
            if (product.length === null) {
              throw new Response("Bad Request", { status: 400 });
            } else return product;
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
              console.log("a");
              return null;
            } else {
              let arr = search.split("&");
              let item;
              arr.forEach((el) => {
                if (el.indexOf("filter") !== -1) {
                  item = el.split("=");
                }
              });
              if (item[1] === undefined) return null;
              else return item[1];
            }
          }}
          element={<Search />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/account"
          loader={async () => {
            let user = await checkUser();
            //console.log(user)
            if (!user) return redirect("/account/login");
            return await getUser();
          }}
          element={<Account />}
          errorElement={<ErrorPage />}
        >
          <Route index element={<AboutUser />} />
          <Route path="addresses" element={<Addresses />} />
          <Route
            path="logout"
            loader={() => {
              logout();
              return redirect("/");
            }}
          />
        </Route>
        <Route
          path="/account/login"
          loader={async () => {
            let user = await checkUser();
            //console.log(user);
            if (user) return redirect("/account");
            return null;
          }}
          element={<Login />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/account/register"
          loader={async () => {
            let user = await checkUser();
            //console.log(user);
            if (user) return redirect("/account");
            return null;
          }}
          element={<Register />}
          errorElement={<ErrorPage />}
        />
        <Route path="/cart/" element={<Cart />} />
        <Route
          path="/blogs/:collection"
          loader={async ({ params }) => {
            let collection_ = params.collection;

            if (collection_ === "all") {
              let blogs = await getAllBlogs();
              return blogs;
            } else {
              //console.log(collection_)
              let blogs = await getBlogByCollection({ collection_ });
              return blogs;
            }
          }}
          element={<Blogs />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/blogs/:collection/:category"
          loader={async ({ params }) => {
            let collection_ = params.collection;
            let category = params.category;

            let blog = await getBlogByCategory({ collection_, category });
            return blog;
          }}
          element={<Blog />}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route
        path="/checkouts"
        loader={async () => {
          let user = await checkUser();

          let { cartlength } = store.getState().cart;
          if (cartlength === 0) redirect("/cart");
          if (!user) return null;
          return await getUser();
        }}
        element={<Checkout />}
        errorElement={
          <>
            <Header />
            <ErrorPage />
            <Footer />
          </>
        }
      />
    </Route>
  )
);

export default router;
