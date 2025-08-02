import Footer from "../Footer";
import Header from "../header";
import NewJournal from "../Modals/NewJournal";
import { Outlet } from "react-router-dom";
export default function RootMainApp(params) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header></Header>
      <Outlet />
      <NewJournal></NewJournal>
      <Footer />
    </div>
  );
}
