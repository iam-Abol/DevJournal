import { useQuery } from "@tanstack/react-query";
import Footer from "../Footer";
import Header from "../header";
import NewJournal from "../Modals/NewJournal";
import { Outlet, useLoaderData } from "react-router-dom";
import { getIsLoggedIn } from "../util";
import Login from "../auth/Login";
import Spinner from "../UI/Spinner";
export default function RootMainApp(params) {
  const { data, isLoading, isError, Error } = useQuery({
    queryKey: ["auth"],
    queryFn: getIsLoggedIn,
    staleTime: 1 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
  console.log(isLoading + " **");
  console.log(data);
  // if (data.error?.status == 401) return <Login />;
  if (isLoading) return <Spinner />;
  return (
    <div className="min-h-screen bg-gray-100">
      <Header></Header>
      <Outlet />
      <NewJournal></NewJournal>
      <Footer />
    </div>
  );
}
