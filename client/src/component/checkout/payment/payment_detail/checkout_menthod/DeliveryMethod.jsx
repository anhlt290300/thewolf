import React from "react";

const DeliveryMethod = () => {
  return (
    <div className="mb-[3em]">
      <div className="mb-[1.5em] relative">
        <h2 className=" text-[#333333] text-[1.285em]">
          Phương thức vận chuyển
        </h2>
      </div>
      <div className="h-fit w-full shadow-[0_0_0_1px_#d9d9d9] rounded-[4px] text-[#737373] p-[2.5em] text-center flex items-center justify-center flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          fill="currentColor"
          className="bi bi-box-seam mb-[1em]"
          viewBox="0 0 16 16"
        >
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
        </svg>
        <p className="text-black">Vui lòng chọn tỉnh / thành để có danh sách phương thức vận chuyển.</p>
      </div>
    </div>
  );
};

export default DeliveryMethod;
