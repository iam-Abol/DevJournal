import Spinner from "../UI/Spinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import VerticalJournal from "../Journal/VerticalJournal";
export default function Saved({}) {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: async () => {
      try {
        const saved = await axios.get(
          "http://localhost:3000/api/journals/saved",
          { withCredentials: true }
        );
        // console.log(saved);

        return saved.data;
      } catch (error) {
        throw new Error("failed to get saved journals", {
          status: 500,
        });
      }
    },
    queryKey: ["saved"],
  });
  // console.log(data);

  if (isLoading) return <Spinner />;
  if (isError) return <p>{error.message}</p>;

  if (data)
    return (
      <ul className="flex justify-around w-full pt-3 pb-20 flex-wrap items-center h-full ">
        {data.map((journal) => (
          <VerticalJournal
            key={journal._id}
            journal={journal}
            // isAuthenticated={userId === journal.user?._id.toString()}
          ></VerticalJournal>
        ))}
      </ul>
    );
}

///////////////////
///////////////////

export const postToSavedAction = async ({ params }) => {
  const { journalId } = params;
  console.log(journalId);

  try {
    const res = await fetch(
      `http://localhost:3000/api/journals/${journalId}/saved`,
      {
        method: "POST",
        credentials: "include",
      }
    );
    if (!res.ok)
      throw new Response("failed to add journal to saved", {
        status: 500,
      });

    // return redirect("/");
  } catch (err) {
    console.error("Action error:", err);
    throw new Response("Something went wrong: " + err.message, {
      status: 500,
    });
  }
};
