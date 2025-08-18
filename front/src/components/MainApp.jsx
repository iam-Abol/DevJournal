import JournalList, { loader as journalsLoader } from "./Journal/JournalList";

import Error from "./Error";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import RootMainApp from "./pages/RootMainApp";
import Messages from "./pages/Messages";
import Saved, { postToSavedAction } from "./pages/Saved";
import Settings from "./pages/Settings";
import { action as addJournalAction } from "./Modals/NewJournal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import JournalDetails from "./Journal/JournalDetails";
import axios from "axios";
import { getIsLoggedIn } from "./util";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
export const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/auth",
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <RootMainApp />,
    loader: getIsLoggedIn,
    id: "rootMainApp",
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
        path: "journals/:journalId",
        element: <JournalDetails />,
      },
      {
        path: "journals/:journalId/save",
        action: postToSavedAction,
      },
    ],
    errorElement: <Error msg={"404 page not found "} />,
  },
]);

export default function MainApp(params) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {" "}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
