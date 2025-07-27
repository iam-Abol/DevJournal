import { useState } from "react";
import Header from "./components/header";
import NewJournal from "./components/Modals/NewJournal";
import ModalCtxProvider from "./components/store/ModalCtx";
import JournalContextProvider from "./components/store/JournalContext";
import JournalList from "./components/Journal/JournalList";
function App() {
  // console.log("herer");

  return (
    <>
      <JournalContextProvider>
        <ModalCtxProvider>
          <div className="min-h-screen bg-gray-100">
            <Header></Header>
            <JournalList></JournalList>
            <NewJournal></NewJournal>
          </div>
        </ModalCtxProvider>
      </JournalContextProvider>
    </>
  );
}

export default App;
