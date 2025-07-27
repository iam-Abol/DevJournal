import { act, createContext, useReducer } from "react";

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
  SET_JOURNALS: () => {},
});
const initialState = {
  journals: [],
  selectedJournal: null,
  loading: false,
  error: null,
};
const journalReducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return { ...state, loading: action.loading };
  }
  if (action.type === "SET_JOURNALS") {
    return { ...state, journals: action.journals };
  }
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
  console.log(state.loading);

  const ADD_ENTRY = (journal) => dispatch({ type: "ADD_ENTRY", journal });
  const DELETE_ENTRY = (id) => dispatch({ type: "DELETE_ENTRY", id });
  const SET_JOURNALS = (journals) =>
    dispatch({ type: "SET_JOURNALS", journals });
  const SET_LOADING = (loading) => dispatch({ type: "SET_LOADING", loading });
  // console.log(state);

  return (
    <JournalContext.Provider
      value={{ ADD_ENTRY, DELETE_ENTRY, SET_JOURNALS, SET_LOADING, ...state }}
    >
      {children}
    </JournalContext.Provider>
  );
}
