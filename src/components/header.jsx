import logo from "../assets/logo.jpg";
export default function Header() {
  return (
    <header>
      <div className="flex justify-between p-4 bg-blue-950">
        <div className="flex items-center gap-2 ">
          <img
            srcSet={logo}
            alt=""
            srcset=""
            className="w-16 h-16 rounded-full"
          />
          <h1 className="text-xl font-bold font-serif text-white ">
            DevJournal
          </h1>
        </div>
        <div className="flex gap-5 items-center">
          <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600">
            {" "}
            + Add Entry
          </button>
          <button className="border px-4 py-2 text-white rounded hover:text-stone-200">
            {" "}
            Login / Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
