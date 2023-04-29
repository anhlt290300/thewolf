import React from "react";
import PropTypes from "prop-types";

const Paging = ({ currentpage, lastpage, url }) => {
  const arr = Array.from({ length: lastpage }, (_, i) => i + 1);
  return (
    <div className="  px-[15px] select-none">
      {lastpage > 1 && (
        <div className="py-[30px] flex items-center justify-center text-[15px] font-semibold text-black-primary">
          {currentpage > 1 && (
            <a
              href={`${url}page=${currentpage + 1}`}
              className=" inline-block mr-[30px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </a>
          )}
          {arr.map((item, index) => {
            if (item === currentpage)
              return (
                <span className=" inline-block px-[8px]" key={index}>
                  {item}
                </span>
              );
            else {
              if (
                (item >= currentpage - 2 && item < currentpage) ||
                (item > currentpage && item <= currentpage + 2)
              )
                return (
                  <a
                    key={index}
                    href={`${url}page=${item}`}
                    className=" inline-block px-[8px] opacity-40"
                  >
                    <span>{item}</span>
                  </a>
                );
              else if (currentpage < lastpage - 2 && item === lastpage)
                return (
                  <a
                    key={index}
                    href={`${url}page=${item}`}
                    className=" inline-block px-[8px] opacity-40"
                  >
                    <span>{item}</span>
                  </a>
                );
              else if (currentpage < lastpage - 3 && item === lastpage - 1)
                return (
                  <span
                    key={index}
                    className=" inline-block px-[8px] opacity-40"
                  >
                    ...
                  </span>
                );
              else return <div key={index}></div>;
            }
          })}
          {currentpage < lastpage && (
            <a
              href={`${url}page=${currentpage - 1}`}
              className=" inline-block ml-[30px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

Paging.propTypes = {
  currentpage: PropTypes.number.isRequired,
  lastpage: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default Paging;
