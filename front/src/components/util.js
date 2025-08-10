import axios from "axios";
import { redirect } from "react-router-dom";
import { queryClient } from "./MainApp";
export const getIsLoggedIn = async () => {
  const data = await queryClient.fetchQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      // try {
      const { data } = await axios.get(
        "http://localhost:3000/api/auth/isLoggedIn",
        {
          withCredentials: true,
        }
      );

      return data;
    },
    staleTime: 60 * 1000,
  });
  console.log(data);
  if (!data.userId) throw redirect("/auth/login");

  return data;
};
