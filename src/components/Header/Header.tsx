import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles["Header-container"]}>
        <div className={styles["Header-content"]}>
          <p>+(84) 366 400 874</p>
          <p>lam.huynthi@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
