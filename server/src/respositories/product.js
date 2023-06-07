// import {print, OutputType} from '../helpers/print.js'
import { Product } from "../models/index.js";
import Exception from "../exception/exceptions.js";

const createProduct = async ({
  type,
  soldout,
  title,
  imgcard,
  buyinstallment,
  imgs,
  code,
  price,
  guarantee,
  exchange,
  colors,
  sizes,
}) => {
  const existingProducts = await Product.findOne({ code }).exec();
  if (!!existingProducts && code !== "null") {
    throw new Exception(Exception.PRODUCT_EXIST);
  }

  await Product.create({
    type,
    soldout,
    title,
    imgcard,
    buyinstallment,
    imgs,
    code,
    price,
    guarantee,
    exchange,
    colors,
    sizes,
  });
  return "Create product!!";
};

const getProductByTitle = async ({ title }) => {
  let href = "/product/" + title;
  const product = await Product.find({}).then((products) =>
    products.filter((el) => {
      return el.title.href === href;
    })
  );
  //console.log(product)
  if (product.length > 0) return product;
  else return null;
};

const getProductByType = async ({ type }) => {
  //console.log(type)
  const product = await Product.find({}).then((products) =>
    products.filter((el) => {
      return el.type === type;
    })
  );
  //console.log(product)
  if (product.length > 0) return product;
  else return null;
};

export default {
  createProduct,
  getProductByTitle,
  getProductByType,
};
