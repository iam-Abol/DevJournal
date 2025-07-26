import { useEffect, useRef } from "react";
import { useContext } from "react";
import { ModalCtx } from "../store/ModalCtx";
export default function Modal({ children, open }) {
  const dialogRef = useRef();
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);
  const { clear } = useContext(ModalCtx);
  return (
    <dialog
      onClose={() => clear()}
      className="w-[90%] max-w-2xl bg-white dark:bg-gray-300 rounded-lg backdrop:bg-black/30 p-6"
      ref={dialogRef}
    >
      {children}
    </dialog>
  );
}
