import { createContext, useReducer } from "react";

export const JournalContext = createContext({
  journals: [], //R
  selectedJournal: null,
  loading: false,
  error: null,
  ADD_ENTRY: () => {}, //    C
  UPDATE_ENTRY: () => {}, //     U
  DELETE_ENTRY: () => {}, //        D
  SET_LOADING: () => {}, // for when loading the data with mongoose
  SET_ERROR: () => {}, // for error
  CLEAR: () => {}, //for logout later
});
const initialState = {
  journals: [],
  selectedJournal: null,
  loading: false,
  error: null,
};
const journalReducer = (state, action) => {
  if (action.type === "ADD_ENTRY") {
    const updatedJournals = [
      ...state.journals,
      {
        id: new Date().toISOString(),
        createdAt: new Date().toLocaleString(),
        ...action.journal,
      },
    ];
    return { ...state, journals: updatedJournals };
  }
  if (action.type === "DELETE_ENTRY") {
    let updatedJournals = [...state.journals];
    updatedJournals = updatedJournals.filter(
      (journal) => journal.id != action.id
    );
    return { ...state, journals: updatedJournals };
  }
};
export default function JournalContextProvider({ children }) {
  const [state, dispatch] = useReducer(journalReducer, initialState);
  const ADD_ENTRY = (journal) => dispatch({ type: "ADD_ENTRY", journal });
  const DELETE_ENTRY = (id) => dispatch({ type: "DELETE_ENTRY", id });
  console.log(state);

  return (
    <JournalContext.Provider value={{ ADD_ENTRY, DELETE_ENTRY, ...state }}>
      {children}
    </JournalContext.Provider>
  );
}
