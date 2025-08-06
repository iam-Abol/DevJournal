import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Spinner from "../UI/Spinner";
export default function JournalDetails() {
  const { journalId } = useParams();
  const {
    data: journal,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["journals", journalId],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/journals/${journalId}`,
          { withCredentials: true }
        );
        return res.data;
      } catch (error) {
        throw new Error("failed to load journal " + error.message);
      }
    },
  });
  console.log(journal);

  if (isError) return <p>eroor failed to load + {error.message}</p>;
  if (isLoading) return <Spinner />;
  const imageUrl = "http://localhost:3000/" + journal.image;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", ease: "easeIn", duration: 1 }}
      className="max-w-2xl mx-auto shadow bg-slate-100 mt-5 mb-20 p-5 rounded-xl"
    >
      <h1 className="font-bold text-3xl mb-3">{journal.title}</h1>
      <p className="mb-2 text-gray-500 text-sm">{journal.createdAt}</p>
      {journal.image && (
        <img
          className="w-full h-auto object-cover rounded-lg  mb-4"
          src={imageUrl}
        />
      )}
      <p className="text-lg text-gray-800">{journal.content}</p>
      {/* for checking is auth and adding edit and delete button */}
    </motion.div>
  );
}
