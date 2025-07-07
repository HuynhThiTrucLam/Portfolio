import Girl from "../assets/vectors/Girl/Girl";
import About from "../components/About/About";
import Tittle from "../components/Title/Tittle";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles["Home-container"]}>
        <div className={styles["Home-top"]}>
          <Girl />
        </div>
        <div className={styles["Home-about"]}>
          <div className={styles["Home-line"]}></div>
          <About />
          <div className={styles["Home-circle"]}>
            <svg
              width="362"
              height="362"
              viewBox="0 0 362 362"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="181" cy="181" r="181" fill="#2555F5" />
            </svg>
          </div>
        </div>
        <div className={styles["Home-objective"]}>
          <div className={styles["Home-objective-container"]}>
            <div className={styles["Home-objective-top"]}>
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simplydummy text of the printing
              </h2>
            </div>
            <div className={styles["Home-objective-bottom"]}>
              <p>
                Lorem Ipsum is siLorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since
              </p>
              <p>
                Lorem Ipsum is siLorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
