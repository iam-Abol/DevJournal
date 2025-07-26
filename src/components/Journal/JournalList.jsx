import { JournalContext } from "../store/JournalContext";
import { useContext } from "react";
export default function JournalList() {
  const { journals } = useContext(JournalContext);
  return (
    <ul>
      {journals.map((j) => {
        return <li key={j.id}>{j.title}</li>;
      })}
    </ul>
  );
}
