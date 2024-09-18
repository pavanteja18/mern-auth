import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mt-6">Sign Up</h1>
      <form className="flex flex-col gap-4 max-w-lg m-auto mt-6">
        <input
          type="text"
          placeholder="Username"
          className="bg-gray-200 rounded-md p-3"
        />
        <input
          type="text"
          placeholder="Email"
          className="bg-gray-200 rounded-md p-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-200 rounded-md p-3"
        />
        <button className="bg-slate-500 p-3 rounded-md text-white uppercase font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
          Sign Up
        </button>
      </form>
      <div className="max-w-lg m-auto mt-2 flex gap-2">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <a className="text-blue-600 font-medium">Sign-in</a>
        </Link>
      </div>
    </>
  );
}
