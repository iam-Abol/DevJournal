import { useContext } from "react";
import { JournalContext } from "../store/JournalContext";
export default function Journal({ journal }) {
  const { DELETE_ENTRY } = useContext(JournalContext);
  const handleDeleteClick = () => {
    console.log("here n delete");
    console.log(journal);

    DELETE_ENTRY(journal._id);
  };
  return (
    <div className="bg-white rounded-lg shadow-md w-[90%] border p-5 px-6 border-gray-500 hover mb-5 hover:shadow-lg transition">
      <div className="flex justify-between ">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{journal.title}</h2>
          <p className="text-sm text-gray-500">{journal.createdAt} </p>
        </div>
        <div className="space-x-2">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm">
            Edit
          </button>
          <button
            onClick={handleDeleteClick}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="mt-4 line-clamp-4 text-gray-700">{journal.content}</p>
    </div>
  );
}
