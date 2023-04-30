import React from "react";

const Login = () => {
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
            <div>
              <div className="block text-black-primary">
                <div className="mb-[30px]">
                  <input
                    type="email"
                    className="w-full h-[55px] border-[1px] border-solid border-[#ededed] bg-[#ededed] outline-none px-[20px] font-medium focus:bg-transparent"
                    placeholder="Email"
                    name=""
                    id=""
                  />
                </div>
                <div className="mb-[30px]">
                  <input
                    type="password"
                    className="w-full h-[55px] border-[1px] border-solid border-[#ededed] bg-[#ededed] outline-none px-[20px] font-medium focus:bg-transparent"
                    placeholder="Mật khẩu"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex">
                  <div className=" inline-block align-middle text-white border-white group/login">
                    <p className=" flex items-center justify-center px-[30px] h-[55px] uppercase font-semibold cursor-pointer group-hover/login:text-[#333]">
                      <span className=""> Đăng nhập</span>
                    </p>
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
