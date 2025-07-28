import Header from "./header";
import NewJournal from "./Modals/NewJournal";
import JournalList from "./Journal/JournalList";
import { JournalContext } from "./store/JournalContext";
import { useContext, useEffect } from "react";
import Spinner from "./UI/Spinner";
import Error from "./Error";
export default function MainApp(params) {
  const { SET_JOURNALS, SET_LOADING, SET_ERROR, error, loading } =
    useContext(JournalContext);
  useEffect(() => {
    const fetchJournals = async () => {
      try {
        SET_LOADING(true);
        const result = await fetch("http://localhost:3000/api/journals");
        const journals = await result.json();
        console.log(" hrer : ", journals);
        SET_JOURNALS(journals);
      } catch (err) {
        console.log("Failed to load journals", err);
        SET_ERROR(err.message);
      } finally {
        SET_LOADING(false);
      }
    };
    fetchJournals();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <Error msg={error}></Error>;
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
