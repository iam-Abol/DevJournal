import { useContext } from "react";
import { JournalContext } from "../store/JournalContext";
import { Link } from "react-router-dom";
export default function Journal({ journal, isAuthenticated }) {
  const { DELETE_ENTRY } = useContext(JournalContext);
  const handleDeleteClick = () => {
    DELETE_ENTRY(journal._id);
  };
  // console.log(journal);
  const imageUrl = "http://localhost:3000/" + journal.image;
  console.log(imageUrl + " -- ");

  return (
    <>
      <div className="bg-white flex  rounded-lg shadow-md w-[90%] border p-5 px-6 border-gray-500 hover mb-5 hover:shadow-lg transition-transform duration-300 hover:scale-105 ease-in-out">
        <section className="w-2/6 mr-3">
          <img
            className="w-full   object-cover h-40 rounded-md shadow-sm border"
            src={imageUrl}
            alt={journal.title}
            srcset=""
          />
          {/* <div>fdasfdff</div> */}
        </section>
        <div className="flex-1">
          <div className="flex justify-between ">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {journal.title}
              </h2>
              <p className="text-sm text-gray-500">{journal.createdAt} </p>
            </div>
          </div>
          <p className="mt-4 line-clamp-4 text-gray-700">{journal.content}</p>
          <Link
            to={`journals/${journal._id}`}
            className="mt-2  inline-block text-sm text-blue-600 hover:underline hover:text-blue-800"
          >
            {" "}
            more details →{" "}
          </Link>
        </div>
        <div className="">
          {isAuthenticated && (
            <div className="flex flex-col  ">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 mb-3 py-1 rounded text-sm">
                Edit
              </button>
              <button
                onClick={handleDeleteClick}
                className="bg-red-500 w-full hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Delete
              </button>{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
