import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const onDismiss = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
};
export default ModalPage;
