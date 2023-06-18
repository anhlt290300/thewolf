import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress } from "../../../../../redux/slice/DeliveryAddress";
import {
  getDistrict,
  getProvince,
  getWard,
} from "../../../../../api/deliveryaddress";

const DeliveryAddress = ({ type }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [value, setValue] = useState(undefined);

  const { province, district, ward } = useSelector(
    (state) => state.deliveryaddress
  );

  const default_option =
    type === "tinh"
      ? "tỉnh / thành"
      : type === "huyen"
      ? "quận / huyện"
      : "phường / xã";

  const selectRef = useRef(null);

  useEffect(() => {
    if (type === "tinh" && value) {
      dispatch(updateAddress({ province: value }));
    } else if (type === "huyen" && province) {
      dispatch(updateAddress({ district: value }));
    } else if (type === "xa" && province && district) {
      dispatch(updateAddress({ ward: value }));
    }
  }, [value, dispatch, province, type, district]);

  useEffect(() => {
    if (province === undefined && type !== "tinh") {
      setData([]);
    }
    if (district === undefined && type === "xa") {
      setData([]);
      setValue(undefined);
    }
    if (district === undefined && type === "huyen") setValue(undefined);
    if (ward === undefined && type === "xa") setValue(undefined);
    if (province === undefined) setValue(undefined);
  }, [province, district, ward, type]);

  useMemo(() => {
    if (type === "tinh") {
      //console.log("goi ham");
      const method = async () => {
        await getProvince(setData);
      };
      method();
    }
  }, [type]);

  useMemo(() => {
    if (type === "huyen" && province) {
      //console.log("goi ham 2");
      const method = async () => {
        await getDistrict(setData, province);
      };
      method();
    }
  }, [type, province]);

  useMemo(() => {
    if (type === "xa" && district) {
      //console.log("goi ham 3");
      const method = async () => {
        await getWard(setData, district);
      };
      method();
    }
  }, [type, district]);

  useEffect(() => {
    if (value && value.length > 0) {
      selectRef.current.classList.add("active");
    } else {
      selectRef.current.classList.remove("active");
    }
  }, [value]);

  return (
    <div
      ref={(e) => (selectRef.current = e)}
      className=" relative  select-none group/delivery"
    >
      <label
        className=" absolute top-0 w-full p-[0_0.93em] text-[0.85em] translate-y-[3px] pointer-events-none text-[#9999] transition-all duration-200 ease-in-out m-[0.5em_0] mt-[0.3em] opacity-0
      group-[.active]/delivery:opacity-100 group-[.active]/delivery:transform-none group-[.active]/delivery:text-[#737373] z-[999]"
      >
        {default_option}
      </label>
      <select
        onChange={(e) => {
          const code = e.target.value;
          //console.log(code);
          setValue(() => code);
        }}
        className="relative select-none appearance-none outline-none rounded-[4px] shadow-[0_0_0_1px_#d9d9d9] text-[#333] font-medium focus:shadow-[0_0_0_2px_#338dbc] w-full p-[0.94em_2em_0.94em_0.8em] transition-all duration-200 ease-in-out break-normal
        group-[.active]/delivery:pt-[1.5em] group-[.active]/delivery:pb-[0.38em]"
      >
        <option value="null">Chọn {default_option}</option>
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <option value={item.code} key={index}>
                {item.name}
              </option>
            );
          })}
      </select>
      <div className=" absolute top-1/2 -translate-y-1/2 right-[10px] border-gray-400 border-l-[1px] pl-[7px] pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down-fill text-gray-500"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </div>
    </div>
  );
};

DeliveryAddress.propTypes = {
  type: PropTypes.string.isRequired,
};

export default DeliveryAddress;
