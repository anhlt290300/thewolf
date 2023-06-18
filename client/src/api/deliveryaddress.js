import axios from "axios";
const getProvince = async (setData) => {
  await axios
    .get("https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1")
    .then((res) => {
      setData(
        res.data.data.data.map((el) => {
          return {
            name: el.name,
            code: el.code,
          };
        })
      );
    })
    .catch((e) => {
      window.location.reload();
    });
};

const getDistrict = async (setData, province) => {
  await axios
    .get(
      `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${province}&limit=-1
          `
    )
    .then((res) => {
      //console.log(res.data.data.data);
      setData(
        res.data.data.data.map((el) => {
          return {
            name: el.name,
            code: el.code,
          };
        })
      );
    });
};

const getWard = async (setData, district) => {
  await axios
    .get(
      `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${district}&limit=-1
          `
    )
    .then((res) => {
      setData(
        res.data.data.data.map((el) => {
          return {
            name: el.name,
            code: el.code,
          };
        })
      );
    });
};

export { getDistrict, getWard, getProvince };
