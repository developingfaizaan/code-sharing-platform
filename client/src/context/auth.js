import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { login as loginAPI, signup as signupAPI } from "../api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth) {
      setUser(auth);
    }
  }, []);

  const signup = async (formData) => {
    const { data } = await signupAPI(formData);

    const { user, token } = data;

    localStorage.setItem("auth", JSON.stringify({ user, token }));

    setUser({ user, token });

    return data;
  };

  const login = async (formData) => {
    const { data } = await loginAPI(formData);

    const { user, token } = data;

    localStorage.setItem("auth", JSON.stringify({ user, token }));

    setUser({ user, token });

    return data;
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setUser(null);
    navigate("/login");
  };

  const value = { user, signup, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
