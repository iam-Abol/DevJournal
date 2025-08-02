import { NavLink } from "react-router-dom";
import { House, BookMarked, Settings, MessagesSquare } from "lucide-react";
export default function Footer(params) {
  return (
    <footer className="fixed right-0 bottom-0 left-0 border-t  bg-white shadow-md">
      <div className="h-16 flex justify-around items-center text-gray-500">
        <NavLink
          className={() => "flex flex-col items-center hover:text-blue-500"}
          to="/"
          end
        >
          <House />
          <span class="text-xs">Home</span>
        </NavLink>

        <NavLink
          className={() => "flex flex-col items-center hover:text-blue-500"}
          to="messages"
        >
          <MessagesSquare />
          <span class="text-xs">Messages</span>
        </NavLink>
        <NavLink
          className={() => "flex flex-col items-center hover:text-blue-500"}
          to="saved"
        >
          <BookMarked />
          <span class="text-xs">Saved</span>
        </NavLink>
        <NavLink
          className={() => "flex flex-col items-center hover:text-blue-500"}
          to="settings"
        >
          <Settings />
          <span class="text-xs">Settings</span>
        </NavLink>
      </div>
    </footer>
  );
}
