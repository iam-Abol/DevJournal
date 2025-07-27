import Modal from "./Modal";
import { useActionState, useContext } from "react";
import { ModalCtx } from "../store/ModalCtx";
import { JournalContext } from "../store/JournalContext";

export default function NewJournal({}) {
  const { modal, clear } = useContext(ModalCtx);
  // console.log(modal);
  const { ADD_ENTRY } = useContext(JournalContext);
  /////////////////////////////////////////
  const submitEntry = (prevState, formData) => {
    const title = formData.get("title");
    const content = formData.get("content");
    console.log(title + content);
    ADD_ENTRY({ title, content });
  };

  const handleCancelClick = () => {
    clear();
  };

  const [messages, formAction, isPending] = useActionState(submitEntry, null);
  return (
    <Modal open={modal === "NEW_JOURNAL"}>
      <form action={formAction} onSubmit={() => clear()} className="p-0">
        <div className="mt-5">
          <label htmlFor="title" className="">
            Title
          </label>
          <input
            type="text"
            className="block w-full rounded border border-gray-300 p-2 focus:border-transparent focus:ring-1 focus:ring-gray-400 focus:outline-none"
            placeholder="Title"
            name="title"
            required
          />
        </div>

        <div className="mt-5">
          <label htmlFor="content" className="">
            {" "}
            Note :{" "}
          </label>
          <textarea
            name="content"
            id="content"
            rows="6"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-transparent focus:ring-1 focus:ring-gray-200 focus:outline-none text-lg p-3"
          ></textarea>
        </div>

        <div className="mt-10 flex w-full">
          <button
            onClick={handleCancelClick}
            className="w-1/2 rounded mx-4 text-center bg-gray-500 py-3 text-white hover:bg-gray-600"
          >
            CANCEL
          </button>
          <button
            className="w-1/2 mx-4 rounded bg-green-500 py-3 text-white hover:bg-green-600"
            type="submit"
          >
            SAVE
          </button>
        </div>
      </form>
    </Modal>
  );
}
