const Textarea = ({ name, label, value, onChange, rows, code }) => (
  <div className="my-6">
    <label htmlFor={label} className={`block mb-2 text-white700 text-md`}>
      {label}
    </label>
    <textarea
      name={name}
      id={label}
      rows={rows}
      className={`py-3 px-5 font-medium text-white bg-black200 rounded-[4px] outline-none focus:outline-primary ease-out duration-200 w-full ${code ? "font-mono" : "font-poppins"}`}
      value={value}
      onChange={onChange}
      required
    ></textarea>
  </div>
);

export default Textarea;
