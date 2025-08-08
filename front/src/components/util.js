import axios from "axios";
import { redirect } from "react-router-dom";
export const getIsLoggedIn = async () => {
  try {
    const { data, status } = await axios.get(
      "http://localhost:3000/api/auth/isLoggedIn",
      {
        withCredentials: true,
      }
    );
    // console.log(data.userId);
    if (!data.userId) throw new Error("Not authenticated");
    console.log(data);

    return data;
  } catch (error) {
    // console.log(error);
    return redirect("/auth/login");
  }
};
