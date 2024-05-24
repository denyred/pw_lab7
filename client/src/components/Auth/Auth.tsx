import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import { toast } from "react-toastify";
import { FlipCard } from "../FlipCard/FlipCard";
import { RegisterForm } from "./RegisterForm";
import { Login } from "./Login";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(255,255,255,.4)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "500px",
  },
};

Modal.setAppElement("#modal");
export const Auth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const handleManageModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="moviesSprite--auth">
      <div onClick={handleManageModal}>Auth</div>

      <Modal
        onRequestClose={handleManageModal}
        isOpen={isModalOpen}
        style={customStyles}
      >
        <div onClick={() => setIsFlipped((prev) => !prev)}>
          {isFlipped ? "Register" : "Login"}
        </div>
        <FlipCard
          isFlipped={isFlipped}
          onChanging={setIsFlipped}
          frontContent={<RegisterForm />}
          backContent={<Login />}
        />
      </Modal>
    </div>
  );
};
