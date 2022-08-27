import { nameInitialsGenerator } from "../utils";

const Avatar = ({ name, email }) => (
  <figure className="flex items-center gap-2">
    <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-primary rounded-full">
      <span className="font-medium text-white">
        {nameInitialsGenerator(name)}
      </span>
    </div>
    
    <div className="flex flex-col">
      <span>{name}</span>
      <small className="text-white700">{email}</small>
    </div>
  </figure>
);

export default Avatar;
