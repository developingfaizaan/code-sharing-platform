import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Input, Button, Error } from "../components";
import { useAuth } from "../context/auth";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(form);

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

      {error && <Error message={error} isAlert />}

      <form onSubmit={handleSubmit}>
        <Input label="Name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <Input label="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <Button type="submit">Create an account</Button>
      </form>

      <p className="text-center my-7">
        Already have an account?
        <Link to="/login" className="text-blue-400 font-medium">
          &nbsp;Log into your account
        </Link>
      </p>
    </section>
  );
};

export default Signup;
