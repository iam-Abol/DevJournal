import { Link, useRouteError } from "react-router-dom";
import { House } from "lucide-react";
export default function Error({ msg }) {
  const error = useRouteError();
  // console.log(error, error.statusText);
  if (error.data) msg = error.data;
  return (
    <div
      id="alert-2"
      className="flex justify-center  items-center h-screen  p-4 mb-4 text-red-800  bg-gray-800"
      role="alert"
    >
      <div className="flex flex-col items-center ms-3 text-sm font-medium">
        <div className="flex block">
          {" "}
          <svg
            className="shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <p className="px-2 font-bold text-xl">{msg}</p>
        </div>
        <Link
          className="flex py-4 mx-4 text-stone-200 hover:text-green-200 hover:underline"
          to={"/"}
        >
          back to Home
          <House className="ml-4" size={25} />
        </Link>
      </div>
    </div>
  );
}
