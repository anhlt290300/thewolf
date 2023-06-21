import axios from "axios";

const getBlogByCollection = async ({ collection_ }) => {
  //const token_ = JSON.parse(localStorage.getItem("token_thewolf"));
  try {
    const blogs = await axios.get(
      `${process.env.REACT_APP_PORT}/blog/${collection_}`
    );
    //console.log(blogs)
    return blogs.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllBlogs = async () => {
  try {
    const blogs = await axios.get(`${process.env.REACT_APP_PORT}/blog/allblog`);
    return blogs.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getBlogByCategory = async ({ category, collection_ }) => {

  try {
    const blogs = await axios.get(
      `${process.env.REACT_APP_PORT}/blog/${collection_}/${category}`
    );
    //console.log(product.data.data)
    return blogs.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllBlogCollection = async () => {
  try {
    const blogs = await axios.get(`${process.env.REACT_APP_PORT}/blog/all`);
    //console.log(blogs.data.data)
    return blogs.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export {
  getBlogByCollection,
  getBlogByCategory,
  getAllBlogs,
  getAllBlogCollection,
};
