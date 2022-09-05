import styles from "./ModalWindowContent.module.css";
import { postComment } from "../../../api/api";
import { useState } from "react";
export const ModalWindowContent = ({ setActive, modalPicture }) => {
  const { id, url } = modalPicture;
  const [textareaValue, setTextareaValue] = useState("");

  const postCommentHandler = (id, text) => {
    postComment(id, text);
  };

  return (
    <div
      className={styles.modalContentContainer}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.picture}>
        <img className="images_card" src={url} alt="s" />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.comment}>Comment</p>
        <textarea
          className={styles.textarea}
          onChange={(e) => {
            setTextareaValue(e.target.value);
          }}
        ></textarea>
        <p className={styles.textContent}>
          Write a few sentences about the photo.
        </p>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          setActive(false);
          postCommentHandler(id, textareaValue);
        }}
      >
        Save
      </button>
    </div>
  );
};
