import styles from "./Content.module.css";

import ContestOne from "../../assets/scanmelabs.jpg";
import ContestTwo from "../../assets/sribu.jpg";
import Line from "../Atom/Line";

const Content = () => {
  return (
    <div className={styles.contentWrap}>
      <h3 className={styles.title}>
        Mengikuti beberapa kontes Seperti Web Design dan Mobile Design untuk
        menguji keterampilan dan kemampuan saya
      </h3>
      <Line />

      <div className={styles.card}>
        <div className={styles.contestCard}>
          <img
            className={styles.contestImg}
            src={ContestOne}
            alt="Kontes-sribu.com"
          />
        </div>
        <div className={styles.contestCard}>
          <img
            className={styles.contestImg}
            src={ContestTwo}
            alt="Kontes-sribu.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
