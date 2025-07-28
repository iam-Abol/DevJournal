export default function Error({ msg }) {
  return (
    <div
      id="alert-2"
      className="flex justify-center items-center items-center h-screen  p-4 mb-4 text-red-800  bg-gray-800"
      role="alert"
    >
      <div className="flex">
        <svg
          className="shrink-0 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>

        <div className="ms-3 text-sm font-medium">{msg}</div>
      </div>
    </div>
  );
}
