import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input, Button, Error } from "../components";
import { login } from "../api";

// TODO: Add Validation
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(form);

      localStorage.setItem("token", JSON.stringify({ token: data.token }));

      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <>
      <section
        className={`w-full max-w-2xl m-auto px-5 md:px-12 sm:px-32 py-20`}
      >
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-14">
          Create an account!
        </h1>
        {error && <Error message={error} />}

        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <Input
            label="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <Button type="submit">Login to your account</Button>
        </form>
      </section>
    </>
  );
};

export default Login;
