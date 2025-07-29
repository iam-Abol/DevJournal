export default function Signup({}) {
  return (
    <>
      <div className="bg-blue">
        <div className="flex min-h-screen bg-white">
          <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
            <div className="text-center p-0 font-sans ">
              <h1 className=" text-gray-800 text-3xl font-medium">
                Create an account for free
              </h1>
              {/* <h3 className="p-1 text-gray-700">
                Free forever. No payment needed.
              </h3> */}
            </div>
            <form>
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
              <button className="block  p-5 text-center text-gray-800  text-xs ">
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
