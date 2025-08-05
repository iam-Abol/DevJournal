import Spinner from "../UI/Spinner";
import { useQuery } from "@tanstack/react-query";
export default function Saved({}) {
  const { data, isLoading, isEnabled, error } = useQuery({
    queryFn: () => {
      return true;
    },
    queryKey: ["saved"],
  });
  if (isLoading) return <Spinner />;
}
