import axios from "axios";

const getProductByType = async ({ type }) => {
  //const token_ = JSON.parse(localStorage.getItem("token_thewolf"));
  try {
    const product = await axios.get(
      `http://localhost:5000/collections/${type}`
    );
    return product.data.data;
  } catch (error) {
    return null;
  }
};

const getProductByTitle = async ({ title }) => {
  try {
    const product = await axios.get(
      `http://localhost:5000/products/${title}`
    );
    //console.log(product.data.data)
    return product.data.data;
  } catch (error) {
    return null;
  }
};

export { getProductByType, getProductByTitle };
