import productRepository from "../respositories/product.js";
import HttpStatusCode from "../exception/HttpStatusCode.js";

const getProductByType = async (req, res) => {
  const { type } = req.params;
  //let type = "shoes-for-decor";
  //console.log(title);
  try {
    let result = await productRepository.getProductByType({
      type,
    });
    res.status(HttpStatusCode.OK).json({
      message: `already get product by type ${type}`,
      data: result,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

export default {
  getProductByType,
};
