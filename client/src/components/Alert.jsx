const Alert = () => (
  <div
    id="toast-simple"
    className="flex items-center p-4 space-x-4 space-x w-full max-w-xsrounded-lg divide-x divide-white400 shadow bg-black300 text-white-400"
    role="alert"
  >
    <img src={alert} alt="alert"/>
    <div className="pl-4 text-sm font-normal text-white">
      Code copied successfully.
    </div>
  </div>
);

export default Alert;
