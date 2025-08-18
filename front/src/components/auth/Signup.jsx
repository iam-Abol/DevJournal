import { useActionState, useState } from "react";
import { useContext } from "react";
import { JournalContext } from "../store/JournalContext";
import { authActions } from "../store/auth";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorAlert from "../Error/ErrorAlert";
export default function Signup({}) {
  const navigate = useNavigate();
  const { SET_ERROR } = useContext(JournalContext);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const action = async (state, fn) => {
    const email = fn.get("email");
    const username = fn.get("username");

    const password = fn.get("password");
    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });
      // console.log(res);
      const data = await res.json();
      console.log(data);

      if (!res.ok) throw data;
      setError(null);
      return navigate("/");
    } catch (err) {
      // console.log(err);
      setError(err);
      // throw new Error(err);
    }
  };

  const [state, formAction] = useActionState(action, null);
  console.log(error);
  let content = null;
  if (error?.type == "validation")
    content = error.errors.map((err) => (
      <ErrorAlert
        onCloseClick={() =>
          setError((prevError) => {
            const errors = prevError.errors.filter(
              (e) => e.message != err.message
            );
            return { ...prevError, errors };
          })
        }
        message={err.message}
      />
    ));

  return (
    <>
      <div className="bg-blue">
        {content}
        <div className="flex  min-h-screen bg-white">
          <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
            <div className="text-center p-0 font-sans ">
              <h1 className=" text-gray-800 text-3xl font-medium">
                Create an account for free
              </h1>
              {/* <h3 className="p-1 text-gray-700">
                Free forever. No payment needed.
              </h3> */}
            </div>
            <form action={formAction}>
              <div className="mt-5">
                <label htmlFor="email" className="">
                  Email :
                </label>
                <input
                  id="email"
                  type="text"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="email" className="">
                  User-name :
                </label>
                <input
                  type="text"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                  placeholder="User-name"
                  name="username"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="email" className="">
                  Password :
                </label>
                <input
                  type="password"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                  placeholder="Password"
                  name="password"
                />
              </div>

              <div className="mt-10">
                <button
                  className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"
                  type="submit"
                >
                  Sign up with email
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate("/auth/login");
                }}
                className="block  p-5 text-center text-gray-800  text-xs "
              >
                Already have an account?
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
