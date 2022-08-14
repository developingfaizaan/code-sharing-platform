import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <header className="flex flex-col py-7 h-36 sm:flex-row items-center justify-between px-5 sm:h-20 m-auto max-w-7xl border-b-2 border-black200 sm:border-none">
      <img src={Logo} alt="Logo" />

      <nav className="flex gap-10">
        <a
          className="text-white700 hover:text-white ease-out duration-200"
          href="/home"
        >
          Home
        </a>
        <a
          className="text-white700 hover:text-white ease-out duration-200"
          href="/home"
        >
          Saved Bins
        </a>
        <a
          className="text-white700 hover:text-white ease-out duration-200"
          href="/home"
        >
          Create
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
