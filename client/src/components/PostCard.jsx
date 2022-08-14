import { Avatar } from "./";

const PostCard = () => {
  return (
    <article className="mb-16 border-b pb-10 border-black200">
      <header className="flex justify-between">
        <Avatar />
        <div className="flex gap-10 text-white700">
          <button href="/" className="flex items-center gap-1">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8136 5.2377C16.4213 4.84531 15.9557 4.53404 15.4431 4.32168C14.9306 4.10931 14.3813 4 13.8265 4C13.2717 4 12.7223 4.10931 12.2098 4.32168C11.6973 4.53404 11.2316 4.84531 10.8394 5.2377L10.0254 6.05166L9.21146 5.2377C8.41924 4.44548 7.34475 4.00041 6.22438 4.00041C5.104 4.00041 4.02951 4.44548 3.23729 5.2377C2.44507 6.02993 2 7.10441 2 8.22479C2 9.34516 2.44507 10.4196 3.23729 11.2119L4.05125 12.0258L10.0254 18L15.9996 12.0258L16.8136 11.2119C17.2059 10.8197 17.5172 10.354 17.7296 9.84146C17.9419 9.32893 18.0513 8.77958 18.0513 8.22479C18.0513 7.67 17.9419 7.12064 17.7296 6.60811C17.5172 6.09558 17.2059 5.62991 16.8136 5.2377V5.2377Z"
                // fill="#F4245E"
                stroke="#8899A6"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="font-medium">2.1k</span>
          </button>
          <button href="/" className="hidden sm:flex items-center gap-1">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6083 6.72501L10.4417 2.55834C10.1975 2.31417 9.80167 2.31417 9.55833 2.55834L5.39167 6.72501C5.14667 6.96917 5.14667 7.36501 5.39167 7.60834C5.63667 7.85167 6.03083 7.85334 6.275 7.60834L9.375 4.50834V13C9.375 13.345 9.655 13.625 10 13.625C10.345 13.625 10.625 13.345 10.625 13V4.50834L13.725 7.60834C13.8467 7.73084 14.0067 7.79167 14.1667 7.79167C14.3267 7.79167 14.4867 7.73167 14.6083 7.60834C14.8525 7.36417 14.8525 6.96917 14.6083 6.72501Z"
                fill="#8899A6"
              />
              <path
                d="M16.4233 18.7867H3.57666C2.52332 18.7867 1.66666 17.93 1.66666 16.8767V12.1667C1.66666 11.8217 1.94666 11.5417 2.29166 11.5417C2.63666 11.5417 2.91666 11.8217 2.91666 12.1667V16.8767C2.91666 17.2409 3.21249 17.5367 3.57666 17.5367H16.4233C16.7875 17.5367 17.0833 17.2409 17.0833 16.8767V12.1667C17.0833 11.8217 17.3633 11.5417 17.7083 11.5417C18.0533 11.5417 18.3333 11.8217 18.3333 12.1667V16.8767C18.3333 17.93 17.4767 18.7867 16.4233 18.7867Z"
                fill="#8899A6"
              />
            </svg>
            <span className="font-medium">3.3k</span>
          </button>
        </div>
      </header>

      <h3 className="text-xl mt-10 mb-3 font-medium">
        Stripe snippet to accept payments!
      </h3>

      <p className="mb-8 text-white700">
        Stripe is a suite of APIs powering online payment processing and
        commerce solutions for internet businesses of all sizes. Accept payments
        and scale faster.
      </p>

      <code className="h-96 overflow-scroll bg-black200">
        position: sticky; z-index: 10; top: 0; backdrop-filter: saturate(180%)
        blur(20px); position: sticky; z-index: 10; top: 0; backdrop-filter:
        saturate(180%) blur(20px); position: sticky; z-index: 10; top: 0;
        backdrop-filter: saturate(180%) blur(20px);
      </code>
    </article>
  );
};

export default PostCard;
