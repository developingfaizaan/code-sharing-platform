import { Link, NavLink } from "react-router-dom";

import { useAuth } from "../context/auth";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="flex flex-col pt-5 pb-2 sm:flex-row items-center justify-between px-5 sm:h-20 m-auto max-w-7xl border-b-2 border-black200 sm:border-none">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <nav className="flex gap-x-10 gap-y-5 py-5 items-center justify-center flex-wrap">
        <NavLink
          to="/"
          className="text-white700 hover:text-white ease-out duration-200"
          style={({ isActive }) =>
            isActive ? { color: "#FFFFFF" } : undefined
          }
        >
          Home
        </NavLink>

        {user ? (
          <>
            <NavLink
              to="/create"
              className="text-white700 hover:text-white ease-out duration-200"
              style={({ isActive }) =>
                isActive ? { color: "#FFFFFF" } : undefined
              }
            >
              Create
            </NavLink>

            <NavLink
              to={`/user/${user.user.id}`}
              className="text-white700 hover:text-white ease-out duration-200"
              style={({ isActive }) =>
                isActive ? { color: "#FFFFFF" } : undefined
              }
            >
              Profile
            </NavLink>
            <button
              onClick={logout}
              title="logout"
              className="flex items-center gap-2 bg-black300 p-3 rounded-md"
            >
              <h6 className="text-white">{user.user.email}</h6>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="text-white700 hover:text-white ease-out duration-200"
              style={({ isActive }) =>
                isActive ? { color: "#FFFFFF" } : undefined
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className="text-white700 hover:text-white ease-out duration-200"
              style={({ isActive }) =>
                isActive ? { color: "#FFFFFF" } : undefined
              }
            >
              Sign Up
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
