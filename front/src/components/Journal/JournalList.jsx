import { JournalContext } from "../store/JournalContext";
import { useContext } from "react";
import Journal from "./Journal";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../UI/Spinner";
import { queryClient } from "../MainApp";

export default function JournalList() {
  const journals = useLoaderData();
  // console.log(journals);
  const userId = useSelector((state) => state.auth.userId);
  // console.log(userId, " hhh ");

  return (
    <>
      (
      <ul className="flex justify-center py-3 flex-wrap ">
        {journals.map((journal) => (
          <Journal
            key={journal._id}
            journal={journal}
            isAuthenticated={userId === journal.user?._id.toString()}
          ></Journal>
        ))}
      </ul>
      )
    </>
  );
}
export const loader = async ({}) => {
  try {
    const result = await fetch("http://localhost:3000/api/journals", {
      credentials: "include",
    });
    if (!result.ok) {
      throw new Response("failed to load journals", { status: 401 });
    }
    const data = await result.json();
    return data;
  } catch (err) {
    throw new Response("failed to get to db", { status: 500 });
  }
};
