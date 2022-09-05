import "./MadalWindow.css";
import { ModalWindowContent } from "./ModalWindowContent/ModalWindowContent";

export const ModalWindow = ({ active, setActive, modalPicture }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <ModalWindowContent setActive={setActive} modalPicture={modalPicture} />
    </div>
  );
};
