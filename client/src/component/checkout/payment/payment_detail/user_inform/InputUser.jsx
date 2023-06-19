import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const InputUser = ({ title, type }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value.length > 0) {
      inputRef.current.classList.add("active");
    } else {
      inputRef.current.classList.remove("active");
    }
  }, [value]);

  const inputRef = useRef(null);
  return (
    <div
      ref={(ref) => (inputRef.current = ref)}
      className=" relative select-none group/input"
    >
      <label
        className=" absolute top-0 w-full p-[0_0.93em] text-[0.85em] translate-y-[3px] pointer-events-none text-[#9999] transition-all duration-200 ease-in-out m-[0.5em_0] mt-[0.3em] opacity-0
      group-[.active]/input:opacity-100 group-[.active]/input:transform-none group-[.active]/input:text-[#737373]"
      >
        {title}
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        defaultValue=""
        type={type}
        className="w-full outline-none rounded-[4px] shadow-[0_0_0_1px_#d9d9d9] appearance-none text-black font-medium focus:shadow-[0_0_0_2px_#338dbc] p-[0.94em_2.8em_0.94em_0.8em] transition-all duration-200 ease-in-out break-normal
        group-[.active]/input:pt-[1.5em] group-[.active]/input:pb-[0.38em]"
        placeholder={title}
      />
    </div>
  );
};

InputUser.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputUser;
