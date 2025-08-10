import Header from "./components/header";
import ModalCtxProvider from "./components/store/ModalCtx";
import JournalContextProvider, {
  JournalContext,
} from "./components/store/JournalContext";

import MainApp from "./components/MainApp";
import Signup from "./components/auth/Signup";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/auth/Login";
import { useContext, useEffect } from "react";
import { authActions } from "./components/store/auth";
function App() {
  // console.log("herer");
  // const authMode = useSelector((state) => state.auth.authMode);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getAuthStatus = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3000/api/auth/isLoggedIn", {
  //         method: "GET",
  //         credentials: "include",
  //       });
  //       // console.log("ererre");
  //       if (!res.ok) {
  //         dispatch(authActions.signup());
  //         return;
  //       }
  //       const data = await res.json();
  //       // console.log("data is ; ", data);

  //       dispatch(
  //         authActions.login({ userId: data.userId, username: data.username })
  //       );
  //     } catch (err) {
  //       console.log("failed to check loggedIN");
  //       console.log(err.message);
  //     }
  //   };
  //   getAuthStatus();
  // }, []);
  // console.log(authMode);

  // if (authMode === "signup") return <Signup></Signup>;
  // if (authMode === "login") return <Login />;
  return (
    <>
      <JournalContextProvider>
        <ModalCtxProvider>
          {/* <Spinner/> */}
          <MainApp />
        </ModalCtxProvider>
      </JournalContextProvider>
    </>
  );
}

export default App;
