import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal: React.FC<{
  onClose: () => void;
  children: ReactNode;
  actionBar: any;
}> = ({ onClose, children, actionBar }) => {
  const modalContainer = document.querySelector(".modal-container")!;
  let content;
  if (modalContainer) {
    content = modalContainer;
  } else {
    return;
  }

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    modalContainer
  );
};
export default Modal;
