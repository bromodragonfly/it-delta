import style from "./MadalWindow.module.css";
import { ModalWindowContent } from "./ModalWindowContent/ModalWindowContent";
export const ModalWindow = ({ active, setActive }) => {
  return (
    <div
      className={active ? [style.modal, style.active] : style.modal}
      onClick={() => setActive(false)}
    >
      <ModalWindowContent />
    </div>
  );
};
