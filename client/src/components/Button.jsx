import React from "react";

const Button = ({ children, styles }) => {
  return (
    <button
      type="button"
      className={`w-full sm:w-max py-3 px-5 font-poppins font-medium text-white bg-primary rounded-[6px] outline-none hover:bg-primaryDark ease-out duration-200 focus:outline-primary ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
