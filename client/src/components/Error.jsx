const Error = ({ message }) => {
  return (
    <div
      className="bg-red-100 rounded-md py-4 px-5 mb-4 text-base text-center text-red-700 mb-3"
      role="alert"
    >
      {message}
    </div>
  );
};

export default Error;
