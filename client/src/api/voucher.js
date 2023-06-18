import axios from "axios";

const getVoucher = async () => {

  try {
    const voucher = await axios.get(
      `${process.env.REACT_APP_PORT}/voucher/get/all`
    );
    //console.log(voucher.data.data)
    return voucher.data.data;
  } catch (error) {
    return 'err';
  }
};


export { getVoucher };
