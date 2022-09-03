import styles from "./HeaderImage.module.css";

import logo from "../../../images/HeaderBanner.png";
export const HeaderImage = () => {
  return (
    <div className={styles.ibg}>
      <img src={logo} alt="Banner" />
    </div>
  );
};
