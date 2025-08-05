import { NavLink } from "react-router-dom";
import { House, BookMarked, Settings, MessagesSquare } from "lucide-react";
export default function Footer(params) {
  let NavLinkStyles =
    "flex flex-col items-center hover:text-blue-500 duration-200";
  let activeClasses = " text-blue-800";

  return (
    <footer className="fixed right-0 bottom-0 left-0 border-t  bg-white shadow-md">
      <div className="h-16 flex justify-around items-center text-gray-400">
        <NavLink
          className={({ isActive }) =>
            NavLinkStyles + (isActive ? activeClasses : "")
          }
          to="/"
          end
        >
          <House />
          <span className="text-xs">Home</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            NavLinkStyles + (isActive ? activeClasses : "")
          }
          to="/messages"
        >
          <MessagesSquare />
          <span className="text-xs">Messages</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            NavLinkStyles + (isActive ? activeClasses : "")
          }
          to="/saved"
        >
          <BookMarked />
          <span className="text-xs">Saved</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            NavLinkStyles + (isActive ? activeClasses : "")
          }
          to="/settings"
        >
          <Settings />
          <span className="text-xs">Settings</span>
        </NavLink>
      </div>
    </footer>
  );
}
