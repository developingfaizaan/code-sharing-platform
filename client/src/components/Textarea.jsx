const Textarea = ({ label }) => {
  return (
    <div className="my-6">
      <label htmlFor={label} className={`block mb-2 text-white700 text-md`}>
        {label}
      </label>
      <textarea
        id={label}
        rows={10}
        className={`py-3 px-5 font-poppins font-medium text-white bg-black200 rounded-[4px] outline-none focus:outline-primary ease-out duration-200 w-full`}
      ></textarea>
    </div>
  );
};

export default Textarea;
