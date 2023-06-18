import React, { useState } from "react";

const CheckoutMethod = () => {
  const [Fundiin, setFundiin] = useState(true);
  const [COD, setCOD] = useState(false);
  const [Bank, setBank] = useState(false);

  const enableInput = () => {
    setFundiin(false);
    setCOD(false);
    setBank(false);
  };
  return (
    <div className=" select-none">
      <div className="mb-[1.5em]">
        <h2 className=" text-[#333333] text-[1.285em]">
          Phương thức thanh toán
        </h2>
      </div>
      <div className="h-fit w-full shadow-[0_0_0_1px_#d9d9d9] rounded-[4px]">
        <div
          onClick={() => {
            enableInput();
            setFundiin((Fundiin) => !Fundiin);
          }}
          className="p-[1.3em] items-center cursor-pointer flex w-auto"
        >
          <div className=" flex items-center pr-[1em] whitespace-nowrap">
            <input
              type="radio"
              name="checkout"
              id=""
              checked={Fundiin}
              className="cursor-pointer appearance-none border-[#cccccc] border-[1px] mr-[0.75em] border-solid checked:bg-[#338dbc] bg-transparent rounded-full w-[18px] h-[18px] relative transition-all duration-200 ease-in-out align-[-4px]
                after:absolute after:top-1/2 after:right-1/2 after:translate-x-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[4px] after:rounded-full after:bg-transparent after:checked:bg-white after:pointer-events-none	
              "
            />
            <div className="flex items-center">
              <img
                src="https://assets.fundiin.vn/merchant/logo_image.png?20230102"
                alt=""
                className="w-[40px] h-[40px] mr-[10px] overflow-clip"
              />
              <div className="block">
                <span>
                  Fundiin - Mua trước trả sau 0% lãi suất{" "}
                  <img
                    src="https://assets.fundiin.vn/merchant/promo_appro_40k.svg?20032023"
                    alt=""
                    className="ml-[10px] h-[22px] align-bottom inline-block"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        {Fundiin && (
          <div className="bg-[#fafafa] border-t-[1px] border-[#ccc]">
            <div className="p-[1.5em] whitespace-pre-line text-left text-[#737373] font-medium">
              <p>
                Dễ dàng sử dụng chỉ sau <strong>5 giây</strong> xác thực tài
                khoản - Trả sau hoàn toàn <strong>MIỄN LÃI </strong>với nhiều kỳ
                hạn:
              </p>
              <p></p>
              <ol className="list-decimal my-[1em]">
                <li className="ml-[3em]">
                  <strong>Trả sau 3 kỳ</strong>&nbsp; cho đơn hàng &lt; 5 triệu
                  đồng
                </li>
              </ol>
              <p></p>
              <p>
                <strong>Ưu đãi*:</strong>
              </p>
              <ol className="list-decimal my-[1em]">
                <li className="ml-[3em]">
                  Đối với Khách hàng mới: Nhập mã <strong>XINCHAO</strong> -
                  Giảm ngay <strong>50% </strong>tối đa <strong>40K </strong>cho
                  đơn hàng từ <strong>100K</strong>.
                </li>
                <li className="ml-[3em]">
                  Đối với Khách hàng từng thanh toán qua Fundiin: Nhập mã{" "}
                  <strong>FUNGIFT</strong> - Giảm ngay <strong>20K</strong> cho
                  đơn hàng từ <strong>200K</strong>.
                </li>
              </ol>
              <p>
                (*) Mã được nhập tại giao diện thanh toán của Fundiin và chỉ
                được sử dụng 1 lần.
              </p>
            </div>
          </div>
        )}

        <div
          onClick={() => {
            enableInput();
            setCOD((COD) => !COD);
          }}
          className="p-[1.3em] items-center cursor-pointer flex w-auto border-[#ccc] border-y-[1px]"
        >
          <div className=" flex items-center pr-[1em] whitespace-nowrap">
            <input
              type="radio"
              name="checkout"
              id=""
              checked={COD}
              className="cursor-pointer appearance-none border-[#cccccc] border-[1px] mr-[0.75em] border-solid checked:bg-[#338dbc] bg-transparent rounded-full w-[18px] h-[18px] relative transition-all duration-200 ease-in-out align-[-4px]
                after:absolute after:top-1/2 after:right-1/2 after:translate-x-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[4px] after:rounded-full after:bg-transparent after:checked:bg-white after:pointer-events-none	
              "
            />
            <div className="flex items-center">
              <img
                src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
                alt=""
                className="w-[40px] h-[40px] mr-[10px] overflow-clip"
              />
              <div className="block">
                <span>Thanh toán khi giao hàng (COD) </span>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            enableInput();
            setBank((Bank) => !Bank);
          }}
          className="p-[1.3em] items-center cursor-pointer flex w-auto"
        >
          <div className=" flex items-center pr-[1em] whitespace-nowrap">
            <input
              type="radio"
              name="checkout"
              id=""
              checked={Bank}
              className=" cursor-pointer appearance-none border-[#cccccc] border-[1px] mr-[0.75em] border-solid checked:bg-[#338dbc] bg-transparent rounded-full w-[18px] h-[18px] relative transition-all duration-200 ease-in-out align-[-4px]
                after:absolute after:top-1/2 after:right-1/2 after:translate-x-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[4px] after:rounded-full after:bg-transparent after:checked:bg-white after:pointer-events-none	
              "
            />
            <div className="flex items-center">
              <img
                src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=4"
                alt=""
                className="w-[40px] h-[40px] mr-[10px] overflow-clip"
              />
              <div className="block">
                <span>Chuyển khoản qua ngân hàng</span>
              </div>
            </div>
          </div>
        </div>

        {Bank && (
          <div className="bg-[#fafafa] border-t-[1px] border-[#ccc]">
            <div className="p-[1.5em] whitespace-pre-line text-center text-[#737373] font-medium">
              VIETCOMBANK <br />
              <br /> Số tài khoản: 0441000692273 <br />
              Tên tài khoản: PHAN CONG HUY <br />
              VIETCOMBANK CHI NHÁNH TÂN BÌNH
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutMethod;
