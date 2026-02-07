import type { MouseEvent, ReactNode } from "react";

type ModalProps={
  children:ReactNode,
  showModal:boolean,
  setShowModal:React.Dispatch<React.SetStateAction<boolean>>,
}
function Modal({ children, showModal, setShowModal }:ModalProps) {
  return (
    <div
      id="wrapper"
      onClick={(e:MouseEvent<HTMLDivElement>) => e.target === e.currentTarget && setShowModal(false)}
      className={`fixed inset-0 z-50 flex items-center justify-center transition duration-300
        ${showModal ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        bg-black/40 backdrop-blur-md
      `}
    >
      {children}
    </div>
  );
}

export default Modal;