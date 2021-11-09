import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navLogo}>
        <h5 className={styles.navTitle}>Halo Hired</h5>
      </div>
      <div className={styles.navLink}>
        <a href="#">Biodata</a>
        <a href="#">About us</a>
        <a href="#">Portfolio</a>
      </div>
    </div>
  );
};

export default Navbar;
