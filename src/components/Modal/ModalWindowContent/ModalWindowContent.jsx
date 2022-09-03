import styles from "./ModalWindowContent.module.css";
export const ModalWindowContent = () => {
  return (
    <div
      className={styles.modalContentContainer}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.picture}>
        picture
        <img src="" alt="" />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.comment}>Comment</p>
        <textarea className={styles.textarea}></textarea>
        <p className={styles.textContent}>
          Write a few sentences about the photo.
        </p>
      </div>
      <button className={styles.button}>Save</button>
    </div>
  );
};
