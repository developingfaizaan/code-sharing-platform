import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <header className="flex flex-col py-7 h-36 sm:flex-row items-center justify-between px-5 sm:h-20 m-auto max-w-7xl border-b-2 border-black200 sm:border-none">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <nav className="flex gap-10">
        <NavLink
          to="/"
          className="text-white700 hover:text-white ease-out duration-200"
          style={({ isActive }) =>
            isActive ? { color: "#FFFFFF" } : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/saved"
          className="text-white700 hover:text-white ease-out duration-200"
          style={({ isActive }) =>
            isActive ? { color: "#FFFFFF" } : undefined
          }
        >
          Saved
        </NavLink>

        <NavLink
          to="/create"
          className="text-white700 hover:text-white ease-out duration-200"
          style={({ isActive }) =>
            isActive ? { color: "#FFFFFF" } : undefined
          }
        >
          Create
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
