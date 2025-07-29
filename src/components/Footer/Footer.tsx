import SeeYah from "../../assets/vectors/SeeYah/SeeYah";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles["Footer-container"]}>
        <div className={styles["Footer-content"]}>
          <div className={styles["Footer-item"]}>
            <SeeYah />
          </div>
          <div className={styles["Footer-item"]}>
            <p className={styles["Footer-title"]}>Information</p>
            <div className={styles["Footer-info-container"]}>
              <div className={styles["Footer-info-item"]}>
                <p className={styles["Footer-label"]}>Email: </p>
                <p className={styles["Footer-value"]}>
                  huyn.thi.truclam@gmail.com
                </p>
              </div>
              <div className={styles["Footer-info-item"]}>
                <p className={styles["Footer-label"]}>Phone: </p>
                <p className={styles["Footer-value"]}>+(84) 366 400 874</p>
              </div>
              <div className={styles["Footer-info-item"]}>
                <p className={styles["Footer-label"]}>Address: </p>
                <p className={styles["Footer-value"]}>Ho Chi Minh City</p>
              </div>
            </div>
          </div>
          <div className={styles["Footer-item"]}></div>
          <div className={styles["Footer-item"]}>
            <p className={styles["Footer-title"]}>Role</p>
            <div className={styles["Footer-role-container"]}>
              <p className={styles["Footer-role-item"]}>
                User Interface Design
              </p>
              <p className={styles["Footer-role-item"]}>Graphic Design</p>
              <p className={styles["Footer-role-item"]}>Frontend Developer</p>
            </div>
          </div>
        </div>
        <p className={styles["Footer-copyright"]}>@2025, TruLem</p>
      </div>
    </div>
  );
}
export default Footer;
