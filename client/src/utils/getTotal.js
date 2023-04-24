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
  return VND.replace("₫", "").replaceAll(',', "");
};

const NumbertoVND = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
};
