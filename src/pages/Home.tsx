import Girl from "../assets/vectors/Girl/Girl";
import About from "../components/About/About";
import CanDo from "../components/CanDo/CanDo";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles["Home-container"]}>
        {/* top */}
        <div className={styles["Home-top"]}>
          <Girl />
        </div>
        {/* about */}
        <div className={styles["Home-about"]}>
          <div className={styles["Home-line"]}>
            <svg
              width="100%"
              height="1"
              viewBox="0 0 1000 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.5 L1000 0.5"
                stroke="var(--secondary-color)"
                stroke-width="0.5"
              />
            </svg>
          </div>
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
        {/* objective */}
        <div className={styles["Home-objective"]}>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simplydummy text of the printing
          </h2>
          <div className={styles["Home-objective-text"]}>
            <p>
              Lorem Ipsum is siLorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since
            </p>
            <p>
              Lorem Ipsum is siLorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum{" "}
            </p>
          </div>
        </div>
        {/* can do */}
        <div className={styles["Home-canDo"]}>
          <CanDo />
        </div>
      </div>
    </div>
  );
};

export default Home;
