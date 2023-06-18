import axios from "axios";

const getProductByType = async ({ type }) => {
  //const token_ = JSON.parse(localStorage.getItem("token_thewolf"));
  try {
    const product = await axios.get(
      `${process.env.REACT_APP_PORT}/collections/${type}`
    );
    return product.data.data;
  } catch (error) {
    return null;
  }
};

const getProductByTitle = async ({ title }) => {
  try {
    const product = await axios.get(
      `${process.env.REACT_APP_PORT}/products/${title}`
    );
    //console.log(product.data.data)
    return product.data.data;
  } catch (error) {
    return null;
  }
};

export { getProductByType, getProductByTitle };
