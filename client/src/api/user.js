import axios from "axios";

const getUser = async () => {
  const token_ = JSON.parse(localStorage.getItem("token_thewolf"));
  try {
    await axios.get("http://localhost:5000/user/getuser", {
      headers: { Authorization: `Bearer ${token_}` },
    });
    return true;
  } catch (error) {
    return false;
  }
};

const login = async ({ email, password }) => {
  try {
    let user = await axios.post("http://localhost:5000/user/login", {
      email: email,
      password: password,
    });
    return user.data;
  } catch (error) {
    return error;
  }
};

export { getUser, login };
