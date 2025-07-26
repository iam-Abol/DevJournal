import { useState } from "react";
import Header from "./components/header";
import Modal from "./Modals/Modal";
function App() {
  return (
    <>
      <Modal open={true}>hello</Modal>
      <div className="min-h-screen bg-gray-100">
        <Header></Header>
      </div>
    </>
  );
}

export default App;
