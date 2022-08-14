const Alert = () => {
  return (
    <div
      id="toast-simple"
      className="flex items-center p-4 space-x-4 space-x w-full max-w-xs text-gray-500 rounded-lg divide-x divide-white400 shadow bg-black300 text-white400"
      role="alert"
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="#00FFB2"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
      <div className="pl-4 text-sm font-normal text-white">
        Code copied successfully.
      </div>
    </div>
  );
};

export default Alert;
