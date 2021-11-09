import styles from "./Banner.module.css";

import ilustrationIcon from "../../assets/cute-avatar.svg";
import Button from "../Atom/Button";

const Banner = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Halo, saya Fauzi seorang{" "}
          <span className={styles.jobs}> IT Support</span> dan{" "}
          <span className={styles.jobs}> UI Design </span>
        </h1>
        <p className={styles.desc}>
          saya sangat interest dengan UI Design, Frontend Developer dan juga IT
          Support saya sangat senang mengerjakannya. Senang berdiskusi dan juga
          sharing tentang pekerjaan atau pengalaman baru
        </p>
        <Button text="Download CV" />
      </div>

      <div className={styles.right}>
        <img
          src={ilustrationIcon}
          alt="ilustration"
          className={styles.images}
        />
      </div>
    </div>
  );
};

export default Banner;
