import logo from "../assets/logo.jpg";

import { ModalCtx } from "./store/ModalCtx";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";
import { Plus, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Header() {
  // const dispatch = useDispatch();
  const { setNewJournal } = useContext(ModalCtx);
  const handleAddEntryClick = () => {
    setNewJournal();
  };
  const navigate = useNavigate();
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
        // dispatch(authActions.logout());
        // later will navigate to a home page those page with image on top :)
        navigate("/auth/login");
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };
  return (
    <header className=" top-0 right-0 left-0  border-b border-gray-600 bg-white shadow-xl ">
      <div className="flex justify-between items-center p-2 ">
        <div className="flex items-center gap-2 ">
          <img
            srcSet={logo}
            alt=""
            srcset=""
            className="w-12 h-12 rounded-full"
          />
        </div>
        <h1 class="text-lg font-semibold text-gray-800">My Journals</h1>
        <div className="flex gap-5 items-center">
          <Plus
            onClick={handleAddEntryClick}
            className="transition-transform hover:rotate-90 hover:scale-125 duration-300 text-gray-700 h-8 w-8 hover:text-blue-600"
          />
          {/* <button
            className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
            onClick={handleAddEntryClick}
          >
            <Plus /> Add Entry
          </button> */}
          <LogOut
            onClick={handleLogoutClick}
            className="transition-transform hover:scale-75 mr-2 duration-300 text-gray-700 h-7 w-7 hover:text-red-500 "
          />

          {/* <button
            onClick={handleLogoutClick}
            className="border px-4 py-2 text-white rounded hover:text-red-500 hover:border-red-600"
          >
            LOGOUT
          </button> */}
        </div>
      </div>
    </header>
  );
}
