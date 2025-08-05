import Spinner from "../UI/Spinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Journal from "../Journal/Journal";

export default function Saved({}) {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: async () => {
      try {
        const saved = await axios.get(
          "http://localhost:3000/api/journals/saed",
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
      <ul className="flex justify-center py-3 flex-wrap">
        {data.map((journal) => (
          <Journal
            key={journal._id}
            journal={journal}
            // isAuthenticated={userId === journal.user?._id.toString()}
          ></Journal>
        ))}
      </ul>
    );
}
