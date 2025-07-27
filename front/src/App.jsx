import Header from "./components/header";
import ModalCtxProvider from "./components/store/ModalCtx";
import JournalContextProvider from "./components/store/JournalContext";

import MainApp from "./components/MainApp";
function App() {
  // console.log("herer");

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
