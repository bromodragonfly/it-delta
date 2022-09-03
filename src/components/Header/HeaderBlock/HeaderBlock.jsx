import { Button } from "../../Button";
import styles from "./HeaderBlock.module.css";
import logoM from "../../../images/MessageIcon.png";
import logoT from "../../../images/TelephoneIcon.png";
import logoA from "../../../images/Avatar.png";
import { Name } from "./Name/Name";

export const HeaderBlock = () => {
  return (
    <div className={styles.headerBlock}>
      <div>
        <img src={logoA} alt="avatar" />
      </div>
      <div className={styles.buttonsBlock}>
        <div className={styles.name}>
          <Name>Ricardo Cooper</Name>
        </div>
        <div>
          <Button className={styles.buttonM}>
            <img src={logoM} alt="s" />
            <span className={styles.buttonText}>Message</span>
          </Button>
        </div>
        <div className={styles.lastButton}>
          <Button className={styles.buttonT}>
            <img src={logoT} alt="s" />
            <span className={styles.buttonText}>Call</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
