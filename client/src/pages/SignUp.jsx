import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const value = await res.json();
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mt-6">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-lg m-auto mt-6"
      >
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="bg-gray-200 rounded-md p-3"
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="bg-gray-200 rounded-md p-3"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-gray-200 rounded-md p-3"
          onChange={handleChange}
        />
        <button className="bg-slate-500 p-3 rounded-md text-white uppercase font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
          Sign Up
        </button>
      </form>
      <div className="max-w-lg m-auto mt-2 flex gap-2">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <p className="text-blue-600 font-medium">Sign-in</p>
        </Link>
      </div>
    </>
  );
}
