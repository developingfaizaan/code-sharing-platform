const Input = ({ name, label, type, placeholder, value, onChange }) => (
  <div className="my-7">
    <label htmlFor={label} className={`block mb-2 text-white700 text-md`}>
      {label}
    </label>
    <input
      name={name}
      type={type}
      id={label}
      placeholder={placeholder && placeholder}
      className={`py-3 px-5 font-poppins font-medium text-white bg-black200 rounded-[4px] outline-none focus:outline-primary ease-out duration-200 w-full placeholder:normal placeholder:text-white400`}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default Input;
