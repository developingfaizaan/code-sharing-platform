import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input, Button, Error } from "../components";
import { signup } from "../api";

// TODO: Add Validation
const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signup(form);

      localStorage.setItem("token", JSON.stringify({ token: data.token }));

      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <section className={`w-full max-w-2xl m-auto px-5 md:px-12 sm:px-32 py-20`}>
      <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-14">
        Create an account!
      </h1>
      {error && <Error message={error} />}

      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
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

        <Button type="submit">Create an account</Button>
      </form>
    </section>
  );
};

export default Signup;
