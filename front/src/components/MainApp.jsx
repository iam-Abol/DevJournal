import JournalList, { loader as journalsLoader } from "./Journal/JournalList";

import Error from "./Error";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import RootMainApp from "./pages/RootMainApp";
import Messages from "./pages/Messages";
import Saved from "./pages/Saved";
import Settings from "./pages/Settings";
import { action as addJournalAction } from "./Modals/NewJournal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootMainApp />,
    children: [
      {
        index: true,
        element: <JournalList></JournalList>,
        loader: journalsLoader,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "saved",
        element: <Saved />,
      },
      {
        path: "settings",
        element: <Settings />,
      },

      {
        path: "add-journal",
        action: addJournalAction,
      },
      {
        path: "journals/:journalId/save",
        action: async ({ params }) => {
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
        },
      },
    ],
    errorElement: <Error msg={"404 page not found "} />,
  },
]);
export default function MainApp(params) {
  // const { SET_JOURNALS, SET_LOADING, SET_ERROR, error, loading } =
  //   useContext(JournalContext);
  // useEffect(() => {
  //   const fetchJournals = async () => {
  //     try {
  //       SET_LOADING(true);
  //       const result = await fetch("http://localhost:3000/api/journals", {
  //         credentials: "include",
  //       });
  //       const journals = await result.json();
  //       console.log(" hrer : ", journals);
  //       SET_JOURNALS(journals);
  //     } catch (err) {
  //       console.log("Failed to load journals", err);
  //       SET_ERROR(err.message);
  //     } finally {
  //       SET_LOADING(false);
  //     }
  //   };
  //   fetchJournals();
  // }, []);

  // if (loading) return <Spinner />;
  // if (error) return <Error msg={error}></Error>;
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {" "}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
