function Login({}) {
  return (
    <div className="bg-blue">
      <div className="flex min-h-screen bg-white">
        <div className="mx-auto my-24 max-w-lg px-4 py-5 shadow-none md:w-1/2">
          <div className="p-0 text-center font-sans">
            <h1 className="text-3xl font-medium text-gray-800">WELCOME BACK</h1>
          </div>
          <form action="/login" method="post" className="p-0">
            <div className="mt-5">
              <label for="email" className="">
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
              <label for="email" className="">
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
              <button
                className="w-full rounded bg-green-500 py-3 text-white hover:bg-green-600"
                type="submit"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
