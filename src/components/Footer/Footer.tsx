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
            <p className="font-[Gilroy-Bold] text-[12px] color-[var(--primary-color)]">
              Information
            </p>
            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-[4px] items-center">
                <p className="font-[Gilroy-Bold] text-[12px] color-[var(--primary-color)]">
                  Email:{" "}
                </p>
                <p className="font-[Gilroy-Medium] text-[12px] color-[var(--primary-color)]">
                  huyn.thi.truclam@gmail.com
                </p>
              </div>
              <div className="flex gap-[4px] items-center">
                <p className="font-[Gilroy-Bold] text-[12px] color-[var(--primary-color)]">
                  Phone:{" "}
                </p>
                <p className="font-[Gilroy-Medium] text-[12px] color-[var(--primary-color)]">
                  +(84) 366 400 874
                </p>
              </div>
              <div className="flex gap-[4px] items-center">
                <p className="font-[Gilroy-Bold] text-[12px] color-[var(--primary-color)]">
                  Address:{" "}
                </p>
                <p className="font-[Gilroy-Medium] text-[12px] color-[var(--primary-color)]">
                  Ho Chi Minh City
                </p>
              </div>
            </div>
          </div>
          <div className={styles["Footer-item"]}></div>
          <div className={styles["Footer-item"]}>
            <p className="font-[Gilroy-Bold] text-[12px] color-[var(--primary-color)]">
              Role
            </p>
            <div className="flex flex-col gap-[16px]">
              <p className="font-[Gilroy-Medium] text-[12px] color-[var(--primary-color)]">
                User Interface Design
              </p>
              <p className="font-[Gilroy-Medium] text-[12px] color-[var(--primary-color)]">
                Graphic Design
              </p>

              <p className="font-[Gilroy-Medium] text-[12px] color-[var(--primary-color)]">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
        <p className={styles["Footer-copyright"]}>@2025, TruLem</p>
      </div>
    </div>
  );
}
export default Footer;
