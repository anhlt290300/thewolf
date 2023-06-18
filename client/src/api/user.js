import axios from "axios";

const checkUser = async () => {
  const token_ = JSON.parse(localStorage.getItem("token_thewolf"));
  // console.log(token_)
  try {
    await axios.get(`${process.env.REACT_APP_PORT}/user/getuser`, {
      headers: { Authorization: `Bearer ${token_}` },
    });
    return true;
  } catch (error) {
    return false;
  }
};

const getUser = async () => {
  const token_ = JSON.parse(localStorage.getItem("token_thewolf"));
  try {
    const user = await axios.get(`${process.env.REACT_APP_PORT}/user/getuser`, {
      headers: { Authorization: `Bearer ${token_}` },
    });
    return user.data.data;
  } catch (error) {
    return null;
  }
};

const login = async ({ email, password }) => {
  try {
    let user = await axios.post(`${process.env.REACT_APP_PORT}/user/login`, {
      email: email,
      password: password,
    });
    return user.data;
  } catch (error) {
    return error;
  }
};

const logout = () => {
  localStorage.setItem('token_thewolf',JSON.stringify(''))
};

export { checkUser, login, getUser, logout };
