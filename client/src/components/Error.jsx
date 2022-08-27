import { Link } from "react-router-dom";

import Button from "./Button";

const Error = ({ message, isAlert }) => {
  if(isAlert) return (
    <div className="bg-red-100 rounded-md py-4 px-5 text-base text-center text-red-700 mb-3" role="alert" >
      {message}
    </div>
  );

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-14">
        {message}
      </h1>
      <Link to="/">
        <Button>Go to Home Page</Button>
      </Link>
    </>
  )
};

export default Error;
