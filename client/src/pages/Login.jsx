import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
const Login = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  let [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("urlredirect");

  //console.log(query);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    //console.log(account);
    e.preventDefault();
    axios
      .post("http://localhost:5000/user/login", account)
      .then((res) => {
        //console.log(res.data);
        localStorage.setItem("token_thewolf", JSON.stringify(res.data.data));
        if (query && query === "checkout") navigate("/checkouts");
        else navigate("/account");
      })
      .catch((exeption) => {
        if (exeption.response) {
          //console.log(exeption.response.data.message);
          //console.log(exeption.response.status);
          setError(exeption.response.data.message);
        }
      });
  };

  return (
    <section>
      <div className=" tablet:px-[15px] select-none">
        <div className="grid desktop:grid-cols-2 grid-cols-1">
          <div
            className=" desktop:border-r-[1px] border-b-[1px] border-solid border-[#ededed] 
          desktop:h-screen tablet:h-[50vh] sticky flex items-center justify-center tablet:py-0 py-[30px]"
          >
            <div
              className=" tablet:w-[80%] desktop:pb-[70px] tablet:pb-[50px] relative 
                    after:block after:w-[60px] after:bg-black after:h-[4px] desktop:after:mt-[70px] tablet:after:mt-[50px] after:mt-[20px] desktop:after:mx-0 after:mx-auto"
            >
              <h1 className=" tablet:text-[54px] text-[34px] font-bold desktop:text-left text-center">
                Đăng nhập
              </h1>
            </div>
          </div>
          <div className=" tablet:py-[100px]  tablet:px-[60px] px-[15px] py-[60px]">
            <form
              action="/account/login"
              onSubmit={(e) => handleSubmit(e)}
              onChange={(e) => {
                let name = e.target.name;
                let value = e.target.value;
                setAccount({ ...account, [name]: value });
              }}
            >
              {error.length !== 0 && (
                <p className=" mb-[10px] capitalize">{error}</p>
              )}
              <div className="block text-black-primary">
                <div className="mb-[30px]">
                  <input
                    type="email"
                    className="w-full h-[55px] border-[1px] border-solid border-[#ededed] bg-[#ededed] outline-none px-[20px] font-medium focus:bg-transparent"
                    placeholder="Email"
                    name="email"
                    //required
                  />
                </div>
                <div className="mb-[30px]">
                  <input
                    type="password"
                    className="w-full h-[55px] border-[1px] border-solid border-[#ededed] bg-[#ededed] outline-none px-[20px] font-medium focus:bg-transparent"
                    placeholder="Mật khẩu"
                    name="password"
                    min={8}
                    max={32}
                    //required
                  />
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    className=" inline-block align-middle text-white border-white group/login"
                  >
                    <p className=" flex items-center justify-center px-[30px] h-[55px] uppercase font-semibold cursor-pointer group-hover/login:text-[#333]">
                      <span className=""> Đăng nhập</span>
                    </p>
                  </button>
                  <div className="ml-[20px] flex items-center justify-center align-middle text-[#959898] font-medium">
                    <div className=" inline-block">
                      <span className="text-black hover:text-hover-a">
                        Quên mật khẩu?
                      </span>
                      <br />
                      hoặc{" "}
                      <a href="/account/register" className=" text-black">
                        Đăng ký
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
