import ReactDOM from "react-dom";

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const modalContainer = document.querySelector(".modal-container")!;
  let content;
  if (modalContainer) {
    content = modalContainer;
  } else {
    return;
  }

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 p-10 bg-white">I'm a modal</div>
    </div>,
    modalContainer
  );
};
export default Modal;
