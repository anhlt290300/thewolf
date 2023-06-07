import productRepository from "../respositories/product.js";
import HttpStatusCode from "../exception/HttpStatusCode.js";
import { getData } from "../fakedata.js";

// const myEvent = new EventEmitter();

// myEvent.on("event.register.user", (params) => {
//   console.log(`They talked about : ${JSON.stringify(params)}`);
// });

const createProduct = async (req, res) => {
  //console.log(req.body)
  const {
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
  } = await req.body;
  try {
    let existingUser = await productRepository.createProduct({
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
    res.status(HttpStatusCode.OK).json({
      message: existingUser,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const insertProduct = async (req, res) => {
  //console.log(req.body)
  let type,
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
    sizes;

  try {
    const arr = getData();
    console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
      (type = arr[i].type),
        (soldout = arr[i].soldout),
        (title = arr[i].title),
        (imgcard = arr[i].imgcard),
        (buyinstallment = arr[i].buyinstallment),
        (imgs = arr[i].imgs),
        (code = arr[i].code),
        (price = arr[i].price),
        (guarantee = arr[i].guarantee),
        (exchange = arr[i].exchange),
        (colors = arr[i].colors),
        (sizes = arr[i].sizes);
      await productRepository.createProduct({
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
      //console.log(arr[i])
    }
    res.status(HttpStatusCode.OK).json({
      message: "oke",
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const getProductByTitle = async (req, res) => {
  const { title } = req.params;
  //console.log(title);
  try {
    let result = await productRepository.getProductByTitle({
      title,
    });
    res.status(HttpStatusCode.OK).json({
      message: `already get product by title ${title}`,
      data: result,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const getProductByType = async (req, res) => {
  //const { type } = req.params;
  let type = "shoes-for-decor";
  //console.log(title);
  try {
    let result = await productRepository.getProductByType({
      type,
    });
    res.status(HttpStatusCode.OK).json({
      message: `already get product by types ${type}`,
      data: result,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

export default {
  createProduct,
  insertProduct,
  getProductByTitle,
  getProductByType,
};
