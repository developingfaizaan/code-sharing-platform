const Textarea = ({ name, label, value, onChange }) => (
  <div className="my-6">
    <label htmlFor={label} className={`block mb-2 text-white700 text-md`}>
      {label}
    </label>
    <textarea
      name={name}
      id={label}
      rows={10}
      className={`py-3 px-5 font-mono font-medium text-white bg-black200 rounded-[4px] outline-none focus:outline-primary ease-out duration-200 w-full`}
      value={value}
      onChange={onChange}
      required
    ></textarea>
  </div>
);

export default Textarea;
