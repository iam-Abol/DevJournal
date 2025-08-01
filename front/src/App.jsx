import Header from "./components/header";
import ModalCtxProvider from "./components/store/ModalCtx";
import JournalContextProvider from "./components/store/JournalContext";

import MainApp from "./components/MainApp";
import Signup from "./components/auth/Signup";
import { useSelector } from "react-redux";
import Login from "./components/auth/Login";
function App() {
  // console.log("herer");
  const authMode = useSelector((state) => state.auth.authMode);

  if (authMode === "signup") return <Signup></Signup>;
  if (authMode === "login") return <Login />;
  return (
    <>
      <JournalContextProvider>
        <ModalCtxProvider>
          <MainApp />
        </ModalCtxProvider>
      </JournalContextProvider>
    </>
  );
}

export default App;
