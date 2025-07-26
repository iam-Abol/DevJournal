import { useState } from "react";
import Header from "./components/header";
import NewJournal from "./Modals/NewJournal";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header></Header>

        <NewJournal></NewJournal>
      </div>
    </>
  );
}

export default App;
