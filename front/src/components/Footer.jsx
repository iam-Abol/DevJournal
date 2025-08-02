import { Link } from "react-router-dom";
import { House, BookMarked, Settings, MessagesSquare } from "lucide-react";
export default function Footer(params) {
  return (
    <footer className="fixed right-0 bottom-0 left-0 border-t  bg-white shadow-md">
      <div className="h-16 flex justify-around items-center text-gray-600">
        <Link className="flex flex-col items-center hover:text-blue-500">
          <House />
          <span class="text-xs">Home</span>
        </Link>

        <Link className="flex flex-col items-center hover:text-blue-500">
          <MessagesSquare />
          <span class="text-xs">Messages</span>
        </Link>
        <Link className="flex flex-col items-center hover:text-blue-500">
          <BookMarked />
          <span class="text-xs">Saved</span>
        </Link>
        <Link className="flex flex-col items-center hover:text-blue-500">
          <Settings />
          <span class="text-xs">Settings</span>
        </Link>
      </div>
    </footer>
  );
}
