import Header from "./header";
import NewJournal from "./Modals/NewJournal";
import JournalList from "./Journal/JournalList";
import { JournalContext } from "./store/JournalContext";
import { useContext, useEffect } from "react";

export default function MainApp(params) {
  const { SET_JOURNALS, SET_LOADING, loading } = useContext(JournalContext);
  useEffect(() => {
    const fetchJournals = async () => {
      try {
        SET_LOADING(true);
        const result = await fetch("http://localhost:3000/api/journals");
        const journals = await result.json();
        console.log(" hrer : ", journals);
        SET_JOURNALS(journals);
      } catch (err) {
        console.error("Failed to load journals", err);
      } finally {
        SET_LOADING(false);
      }
    };
    fetchJournals();
  }, []);

  if (loading) return <h1>Loading . . . . .</h1>;

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header></Header>

        <JournalList></JournalList>
        <NewJournal></NewJournal>
      </div>
    </>
  );
}
