import { Button } from "../../Button/Button";
import styles from "./HeaderBlock.module.css";
import logoMessage from "../../../images/MessageIcon.png";
import logoTelephone from "../../../images/TelephoneIcon.png";
import logoAvatar from "../../../images/Avatar.png";
import { Name } from "./Name/Name";

export const HeaderBlock = () => {
  return (
    <div className={styles.headerBlock}>
      <div className={styles.avatar}>
        <img src={logoAvatar} alt="avatar" />
      </div>
      <div className={styles.buttonsBlock}>
        <div className={styles.name}>
          <Name>Ricardo Cooper</Name>
        </div>
        <div className={styles.buttonsWrapper}>
          <Button>
            <img src={logoMessage} alt="s" />
            <span className={styles.buttonText}>Message</span>
          </Button>

          <Button>
            <img src={logoTelephone} alt="s" />
            <span className={styles.buttonText}>Call</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
