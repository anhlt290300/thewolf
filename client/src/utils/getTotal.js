import { getProductsById } from "../assets/fakeData/products";

export const getTotal = (cartArr) => {
  let result = 0;
  cartArr.forEach((element) => {
    let item = getProductsById(element.id);

    result += VNDtoNumber(item.price.saleprice) * element.quantity;
  });
  return NumbertoVND(result);
};

const VNDtoNumber = (VND) => {
  return VND.replace("₫", "").replaceAll(",", "");
};

const NumbertoVND = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
};

export const getSalePrice = (price, discount) => {
  let price_ = VNDtoNumber(price);
  if (discount === 0) return NumbertoVND(price_);
  else {
    return NumbertoVND((price_ * discount) / 100);
  }
};

export const getFundii = (price, discount) => {
  //console.log(roundingPrice(666666));
  return NumbertoVND(
    roundingPrice((VNDtoNumber(getSalePrice(price, discount)) / 3).toFixed())
  );
};

const roundingPrice = (price) => {
  if (Number(price) > 999) {
    let string_ = price.toString();
    let length = string_.length;
    let result = "";

    for (let i = 0; i < length; i++) {
      if (i === length - 1 || i === length - 2 || i === length - 3) result += 0;
      else result += string_[i];
    }
    //console.log(result)
    return Number(result);
  } else return price;
};
