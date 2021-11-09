import Line from "../Atom/Line";
import styles from "./About.module.css";

import Button from "../Atom/Button";

// import avatarAbout from "../../assets/cute-avatar-about.svg";

const About = () => {
  return (
    <div className={styles.wrapAbout}>
      <div className={styles.wrapTitle}>
        <h3 className={styles.title}>About Us</h3>
        <Line />
      </div>
      <div className={styles.wrapDesc}>
        <p className={styles.desc}>
          Perkenalkan nama saya Muhammad Fauzi seorang IT Support lulusan D3
          Teknologi Komputer di Universita Bina Sarana Informatika. Saya tinggal
          di kota Depok Jawa Barat. Hari-hari saya meluangkan waktu untuk growth
          kemampuan belajar UI Design, Frontend Developer dan juga IT
          Networking. aktif membuat UI Design, aktif explorasi di dribbble. Saya
          menyukai berenang dan juga bermain futsal
        </p>
        <div className={styles.buttonCV}>
          <Button text="Download CV" />
        </div>
      </div>
    </div>
  );
};

export default About;
