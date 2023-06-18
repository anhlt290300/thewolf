import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    gender: 1,
    birthday: "",
  });
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    //console.log(account);
    e.preventDefault();
    //console.log(account);
    axios
      .post(`${process.env.REACT_APP_PORT}/user/register`, account) 
      .then((res) => {
        //console.log(res.data);
        // localStorage.setItem(
        //   "token_thewolf",
        //   JSON.stringify(res.data.data.token)
        // );
        navigate("/account");
      })
      .catch((exeption) => {
        if (exeption.response) {
          // console.log(
          //   exeption.response.data.message
          //     .replace("ValidationError:", "")
          //     .trim()
          // );
          //console.log(exeption.response.status);
          setError(
            exeption.response.data.message
              .replace("ValidationError:", "")
              .trim()
          );
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
                Tạo tài khoản
              </h1>
            </div>
          </div>
          <div className=" tablet:py-[100px]  tablet:px-[60px] px-[15px] py-[60px]">
            <form
              action="/account/register"
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
                    type="text"
                    className="w-full h-[55px] border-[1px] border-solid border-[#ededed] bg-[#ededed] outline-none px-[20px] font-medium focus:bg-transparent"
                    placeholder="Họ"
                    name="firstname"
                  />
                </div>
                <div className="mb-[30px]">
                  <input
                    type="text"
                    className="w-full h-[55px] border-[1px] border-solid border-[#ededed] bg-[#ededed] outline-none px-[20px] font-medium focus:bg-transparent"
                    placeholder="Tên"
                    name="lastname"
                  />
                </div>
                <div className="mb-[30px] flex items-center">
                  <input type="radio" name="gender" id="radio1" value="0" />
                  <label
                    htmlFor="radio1"
                    className="pl-[5px] cursor-pointer font-bold mr-[20px]"
                  >
                    Nữ
                  </label>
                  <input type="radio" name="gender" id="radio2" value="1" />
                  <label
                    htmlFor="radio2"
                    className="pl-[5px] cursor-pointer font-bold"
                  >
                    Nam
                  </label>
                </div>
                <div className="mb-[30px]">
                  <input
                    type="text"
                    className="w-full h-[55px] border-[1px] border-solid border-[#ededed] bg-[#ededed] outline-none px-[20px] font-medium focus:bg-transparent"
                    placeholder="mm/dd/yyyy"
                    name="birthday"
                  />
                </div>
                <div className="mb-[30px]">
                  <input
                    type="email"
                    className="w-full h-[55px] border-[1px] border-solid border-[#ededed] bg-[#ededed] outline-none px-[20px] font-medium focus:bg-transparent"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="mb-[30px]">
                  <input
                    type="password"
                    className="w-full h-[55px] border-[1px] border-solid border-[#ededed] bg-[#ededed] outline-none px-[20px] font-medium focus:bg-transparent"
                    placeholder="Mật khẩu"
                    name="password"
                  />
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    className=" inline-block align-middle text-white border-white group/login"
                  >
                    <p className=" flex items-center justify-center px-[30px] h-[55px] uppercase font-semibold cursor-pointer group-hover/login:text-[#333]">
                      <span className=""> Đăng ký</span>
                    </p>
                  </button>
                </div>
                <div className=" mt-[35px] font-medium">
                  <a href="/" className="  flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-left mr-[20px]"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Quay lại trang chủ</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
