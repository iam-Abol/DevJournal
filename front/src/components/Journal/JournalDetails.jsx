import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
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
    <div>
      <h1>{journal.title}</h1>
      {/* <p>{new Date(journal.createdAt).toLocaleString()}</p> */}
      {journal.image && <img src={imageUrl} />}
      <p>{journal.content}</p>
      {/* for checking is auth and adding edit and delete button */}
    </div>
  );
}
