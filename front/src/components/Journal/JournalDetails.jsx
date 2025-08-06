import { useParams } from "react-router-dom";
export default function JournalDetails() {
  const { journalId } = useParams();
  return <div>{journalId}</div>;
}
