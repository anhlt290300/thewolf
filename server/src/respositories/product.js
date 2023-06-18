// import {print, OutputType} from '../helpers/print.js'
import { Collection, Product } from "../models/index.js";
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
  discount,
  guarantee,
  exchange,
  colors,
  sizes,
}) => {
  const existingProducts = await Product.findOne({ code }).exec();
  if (!!existingProducts && code !== "null") {
    //throw new Exception(Exception.PRODUCT_EXIST);
    return "lap ne";
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
    discount,
    guarantee,
    exchange,
    colors,
    sizes,
  });
  return "Create product!!";
};

const getProductByTitle = async ({ title }) => {
  let href = "/products/" + title;
  const product = await Product.find({}).then((products) => {
    //console.log(products.length)
    return products.filter((el) => {
      return el.title.href === href;
    });
  });
  // console.log(product);
  if (product.length > 0) return product[0];
  else return null;
};

const getProductByType = async ({ type }) => {
  //console.log(type)
  const existingCollection = await Collection.findOne({ title: type }).exec();

  if (!!existingCollection) {
    const collectionArr = existingCollection.collectionChildArr.map(
      (el) => el.title
    );

    const products = await Product.find()
      .where("type")
      .in(collectionArr)
      .exec();

    return products;
  } else {
    const products = await Product.find({ type: type }).exec();

    return products;
  }
};

const getListProductById = async ({ arrIdProduct }) => {
  //console.log(arrIdProduct);
  const product = await Product.find().where("code").in(arrIdProduct).exec();
  return product;
};

export default {
  createProduct,
  getProductByTitle,
  getProductByType,
  getListProductById,
};
