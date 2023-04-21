import React, { useRef } from "react";
import PropTypes from "prop-types";

const ProductDescription = ({ product }) => {
  const desciptionRef = useRef([]);

  const toggle = (ref) => {
    desciptionRef.current.forEach((el) => {
      if (el.getAttribute("id") !== ref.getAttribute("id")) {
        el.classList.remove("open");
      }
      //console.log(el.getAttribute("id"));
    });
    ref.classList.toggle("open");
  };
  return (
    <div className="px-[15px] col-span-3 select-none">
      <div className=" pb-[10px]">
        <p className=" font-bold text-[13px] mb-[5px] text-black-primary">
          {product.title.content}
        </p>
        <span className=" text-[11px] font-medium text-[#a3a5a7] leading-[1.4]">
          {product.code}
        </span>
        {product.soldout && (
          <span className=" text-sm text-black-primary leading-[1.4] ml-[5px]">
            {product.soldout}
          </span>
        )}
      </div>
      <div className=" ">
        <div
          id="des"
          ref={(el) => (desciptionRef.current[0] = el)}
          className="mb-[10px] pb-[10px] group/description border-b-[1px] border-[#e7e7e7] border-solid"
        >
          <p
            onClick={() => toggle(desciptionRef.current[0])}
            className="flex items-center justify-between leading-[1.2] text-[11px] font-medium mb-[15px] cursor-pointer"
          >
            <span>THÔNG TIN SẢN PHẨM</span>
            <span className=" group-[.open]/description:block hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </span>
            <span className=" group-[.open]/description:hidden block ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </span>
          </p>
          <div className=" max-h-0 overflow-hidden transition-all ease-linear duration-1000 group-[.open]/description:max-h-[500px]">
            <ul className="ml-[24px] list-disc text-[11px] mb-[10px]">
              <li>
                <span>Màu sắc: Đen láng. </span>
              </li>
              <li>
                <span>Chất liệu da: da bò đen láng + da bò hột đen láng. </span>
              </li>
              <li>
                <span>Chất liệu đế: cao su nguyên chất + đế EVA ở giữa.</span>
              </li>
              <li>
                <span>Lót trong: da dê + vải canvas cao cấp. </span>
              </li>
              <li>
                <span>Độ cao gót đế: 4,5cm. </span>
              </li>
              <li>
                <span>Chỉ giày to và được may đồng đều. </span>
              </li>
              <li>
                <span></span>Sử dụng kỹ thuật bóp viền, một kĩ thuật đòi hỏi kĩ
                năng của người thợ làm giày.{" "}
              </li>
              <li>
                <span></span>Sản phẩm được THIẾT KẾ VÀ GIA CÔNG BỞI NGƯỜI VIỆT
                NAM.{" "}
              </li>
            </ul>
          </div>
        </div>

        <div
          id="gua"
          ref={(el) => (desciptionRef.current[1] = el)}
          className="mb-[10px] pb-[10px] group/description border-b-[1px] border-[#e7e7e7] border-solid"
        >
          <p
            onClick={() => toggle(desciptionRef.current[1])}
            className="flex items-center justify-between leading-[1.2] text-[11px] font-medium mb-[15px]  cursor-pointer"
          >
            <span>CHÍNH SÁCH BẢO HÀNH</span>
            <span className=" group-[.open]/description:block hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </span>
            <span className=" group-[.open]/description:hidden block ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </span>
          </p>
          <div className=" max-h-0 overflow-hidden transition-all ease-linear duration-1000 group-[.open]/description:max-h-[500px]">
            <ul className="ml-[24px] list-disc text-[11px] mb-[10px]">
              <li>
                <span>Bảo hành trọn đời về các vấn đề bong tróc keo đế </span>
              </li>
              <li>
                <span>
                  Miễn phí 3 lần vệ sinh đánh bóng giày (mang theo thẻ vệ sinh){" "}
                </span>
              </li>
              <li>
                <span>
                  Đổi trả trong vòng 1 tuần nếu xảy ra vấn đề do nhà sản xuất
                </span>
                <ul className=" ml-[24px] list-circle">
                  <li>
                    <span>
                      Đổi hàng trong vòng 1 tuần nếu xảy ra vấn đề do nhà sản
                      xuất
                    </span>
                  </li>
                  <li>
                    <span>
                      Trong trường hợp chưa mang lần nào, nhưng bị vấn đề về đế
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span>Mua tại store hỗ trợ đổi hàng trong vòng 24h </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="exc"
          ref={(el) => (desciptionRef.current[2] = el)}
          className="mb-[10px] pb-[10px] group/description border-b-[1px] border-[#e7e7e7] border-solid"
        >
          <p
            onClick={() => toggle(desciptionRef.current[2])}
            className="flex items-center justify-between leading-[1.2] text-[11px] font-medium mb-[15px] cursor-pointer"
          >
            <span>CHÍNH SÁCH ĐỔI HÀNG</span>
            <span className=" group-[.open]/description:block hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </span>
            <span className=" group-[.open]/description:hidden block ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </span>
          </p>
          <div className=" max-h-0 overflow-hidden transition-all ease-linear duration-1000 group-[.open]/description:max-h-[500px]">
            <ul className="ml-[24px] list-disc text-[11px] mb-[10px]">
              <li>
                <span>
                  Hàng phải còn nguyên vẹn không có bất kì sự thay đổi nào{" "}
                </span>
              </li>
              <li>
                <span>
                  Hàng khi đóng gói lại phải kèm túi hộp vẫn còn nguyên vẹn{" "}
                </span>
              </li>
              <li>
                <span>Phải điền đầy đủ thông tin để tránh thất lạc</span>
              </li>
              <li>
                <span>
                  Mọi chi phí vận chuyển đổi size sẽ do bên mua chịu toàn bộ chi
                  phí{" "}
                </span>
              </li>
            </ul>
            <p className="text-[11px]">
              {" "}
              LƯU Ý: Nếu lỗi nhà cung cấp chúng tôi sẽ chịu hoàn toàn chi phí
            </p>
            <p className="text-[11px]">
              * Liên hệ trực tiếp với chúng tôi để việc trao đổi trở nên dễ dàng
              hơn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDescription;
