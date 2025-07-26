import { createContext, useState } from "react";

export const ModalCtx = createContext({
  modal: "",
  clear: () => {},
  setNewJournal: () => {},
});

export default function ModalCtxProvider({ children }) {
  const [modal, setModal] = useState("");
  const clear = () => {
    setModal("");
  };
  const setNewJournal = () => {
    setModal("NEW_JOURNAL");
  };
  // const clear=
  return (
    <ModalCtx.Provider value={{ modal, clear, setNewJournal }}>
      {children}
    </ModalCtx.Provider>
  );
}
