const Button = ({ children, type, styles, onClick }) => (
  <button
    type={type}
    className={`w-full py-3 px-5 font-poppins font-medium text-white bg-primary rounded-[6px] outline-none hover:bg-primaryDark ease-out duration-200 focus:outline-primary ${styles}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
