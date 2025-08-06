import { Link } from "react-router-dom";

export default function Journal({ journal, isAuthenticated }) {
  const imageUrl = "http://localhost:3000/" + journal.image;

  return (
    <>
      <div className="bg-white flex flex-col rounded-lg shadow-md w-full sm:w-[48%] md:w-[30%] border p-5 px-6 border-gray-300 hover:shadow-lg transition-transform duration-300 hover:scale-[102%] mb-4">
        <section className="w-full mb-3">
          <img
            className="w-full object-cover h-40 rounded-md shadow-sm border"
            src={imageUrl}
            alt={journal.title}
          />
        </section>

        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800">{journal.title}</h2>
          <p className="text-sm text-gray-500">{journal.createdAt}</p>

          <p className="mt-4 line-clamp-4 text-gray-700">{journal.content}</p>

          <Link
            to={`/journals/${journal._id}`}
            className="mt-2 inline-block text-sm text-blue-600 hover:underline hover:text-blue-800"
          >
            more details →
          </Link>
        </div>
      </div>
    </>
  );
}
