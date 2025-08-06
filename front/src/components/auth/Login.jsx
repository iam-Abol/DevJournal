import { useActionState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { JournalContext } from "../store/JournalContext";
import { useContext } from "react";
import { motion } from "framer-motion";
function Login({}) {
  const dispatch = useDispatch();
  const { SET_ERROR } = useContext(JournalContext);
  const action = async (state, fd) => {
    const password = fd.get("password");
    const email = fd.get("email");
    console.log(email, password);

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("failed to login");
      dispatch(
        authActions.login({ username: res.username, userId: res.userId })
      );
    } catch (err) {
      console.log("front login error");
      console.log(err.message);

      SET_ERROR(err.message);
    }
  };
  const [state, formAction] = useActionState(action, null);
  const handleSignupPage = () => {
    dispatch(authActions.setSignup());
  };
  return (
    <div className="bg-blue">
      <div className="flex min-h-screen bg-white">
        <div className="mx-auto my-24 max-w-lg px-4 py-5 shadow-none md:w-1/2">
          <div className="p-0 text-center font-sans">
            <h1 className="text-3xl font-medium text-gray-800">WELCOME BACK</h1>
          </div>
          <form action={formAction}>
            <div className="mt-5">
              <label htmlFor="email" className="">
                Email :
              </label>
              <input
                type="text"
                className="block w-full rounded border border-gray-300 p-2 focus:border-transparent focus:ring-1 focus:ring-gray-400 focus:outline-none"
                placeholder="Email"
                name="email"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="email" className="">
                Password :
              </label>
              <input
                type="password"
                className="block w-full rounded border border-gray-300 p-2 focus:border-transparent focus:ring-1 focus:ring-gray-400 focus:outline-none"
                placeholder="Password"
                name="password"
              />
            </div>

            <div className="mt-10">
              <motion.button
                initial={{ scale: 0.5 }}
                // animate={{ scale: [0.8, 1, 1.02, 1] }}
                animate={{ scale: 1 }}
                whileHover={{
                  backgroundColor: "#038525",
                  scale: 1.02,
                  y: 2,
                }}
                className="w-full rounded bg-green-500 py-3 text-white hover:bg-green-600"
                type="submit"
              >
                LOGIN
              </motion.button>
            </div>
            <div className="flex justify-center">
              <motion.button
                type="button"
                whileHover={{ scale: 1.2, color: "#850303" }}
                onClick={handleSignupPage}
                className="block  p-5 text-center text-gray-800  text-xs "
              >
                create an account?
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
