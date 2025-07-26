import { useState } from "react";
import Header from "./components/header";
import NewJournal from "./Modals/NewJournal";
import ModalCtxProvider from "./store/ModalCtx";
function App() {
  // console.log("herer");

  return (
    <>
      <ModalCtxProvider>
        <div className="min-h-screen bg-gray-100">
          <Header></Header>

          <NewJournal></NewJournal>
        </div>
      </ModalCtxProvider>
    </>
  );
}

export default App;
