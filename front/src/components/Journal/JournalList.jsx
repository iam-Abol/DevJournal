import { JournalContext } from "../store/JournalContext";
import { useContext } from "react";
import Journal from "./Journal";
export default function JournalList() {
  const { journals } = useContext(JournalContext);
  return (
    <ul className="flex justify-center py-3 flex-wrap">
      {journals.map((journal) => (
        <Journal key={journal.id} journal={journal}></Journal>
      ))}
    </ul>
  );
}
