import styles from "./HeaderImage.module.css";
import logoBanner from "../../../images/HeaderBanner.png";
export const HeaderBanner = () => {
  return (
    <div className={styles.ibg}>
      <img src={logoBanner} alt="Banner" />
    </div>
  );
};
