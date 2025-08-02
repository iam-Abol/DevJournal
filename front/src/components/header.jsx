import logo from "../assets/logo.jpg";

import { ModalCtx } from "./store/ModalCtx";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";
export default function Header() {
  const dispatch = useDispatch();
  const { setNewJournal } = useContext(ModalCtx);
  const handleAddEntryClick = () => {
    setNewJournal();
  };
  const handleLogoutClick = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.ok) {
        dispatch(authActions.logout());
        // optional: navigate("/login"); or show a toast message
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };
  return (
    <header>
      <div className="flex justify-between p-4 bg-blue-950">
        <div className="flex items-center gap-2 ">
          <img
            srcSet={logo}
            alt=""
            srcset=""
            className="w-16 h-16 rounded-full"
          />
          <h1 className="text-xl font-bold font-serif text-white ">
            DevJournal
          </h1>
        </div>
        <div className="flex gap-5 items-center">
          <button
            className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
            onClick={handleAddEntryClick}
          >
            + Add Entry
          </button>
          <button
            onClick={handleLogoutClick}
            className="border px-4 py-2 text-white rounded hover:text-red-500 hover:border-red-600"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </header>
  );
}
