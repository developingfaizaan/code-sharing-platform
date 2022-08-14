const Avatar = () => {
  return (
    <figure className="flex items-center gap-2">
      <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-primary rounded-full">
        <span className="font-medium text-white">DL</span>
      </div>

      <div className="flex flex-col">
        <span>Devon Lane</span>
        <small className="text-white700">@marcelosalomao</small>
      </div>
    </figure>
  );
};

export default Avatar;
