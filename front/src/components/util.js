import axios from "axios";
import { redirect } from "react-router-dom";
import { queryClient } from "./MainApp";
export const getIsLoggedIn = async () => {
  return queryClient.fetchQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/auth/isLoggedIn",
          {
            withCredentials: true,
          }
        );
        // if (!data.userId) throw redirect("/login");
        return data;
      } catch (error) {
        console.log(error);
        if (error.status == 401) return redirect("/auth/login");
      }
    },
    staleTime: 60 * 1000,
  });
  // try {
  //   const { data, status } = await axios.get(
  //     "http://localhost:3000/api/auth/isLoggedIn",
  //     {
  //       withCredentials: true,
  //     }
  //   );
  //   // console.log(data.userId);
  //   if (!data.userId) throw new Error("Not authenticated");
  //   console.log(data);

  //   return data;
  // } catch (error) {
  //   // console.log(error);
  //   return redirect("/auth/login");
  // }
};
