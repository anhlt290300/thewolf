import axios from "axios";

const getVoucher = async () => {

  try {
    const voucher = await axios.get(
      `http://localhost:5000/voucher/get/all`
    );
    //console.log(voucher.data.data)
    return voucher.data.data;
  } catch (error) {
    return 'err';
  }
};


export { getVoucher };
