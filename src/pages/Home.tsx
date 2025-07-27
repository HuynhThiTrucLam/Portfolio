import DecorateStart from "../assets/vectors/Decorate/DecorateStart";
import Girl from "../assets/vectors/Girl/Girl";
import Next from "../assets/vectors/Next/Next";
import Poster from "../assets/vectors/Poster/poster";
import About from "../components/About/About";
import Button from "../components/Button/Button";
import CanDo from "../components/CanDo/CanDo";
import Form from "../components/Form/Form";
import Projects from "../components/Projects/Projects";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles["Home-container"]}>
        {/* top */}
        <div className={styles["Home-top"]}>
          <Girl />
          <div className={styles["Home-top-text"]}>
            <h1>I am Truc Lam Huynh</h1>
            <div className={styles["row"]}>
              <p>Good Design</p>
              <Button text="Get in touchs" onClick={() => {}} isPrimary />
              <p>Strong Connection</p>
            </div>
          </div>
        </div>
        {/* about */}
        <div className={styles["Home-about"]}>
          <DecorateStart className={styles["decorate-start1"]} />
          <DecorateStart className={styles["decorate-start2"]} />
          {/* <div className={styles["Home-line"]}></div> */}
          <div className={styles["Home-about-container"]}>
            <div className={styles["Home-mask"]}>
              <Poster></Poster>
            </div>
            <About />
          </div>
        </div>
        {/* can do */}
        {/* <div className={styles["Home-canDo"]}>
          <CanDo />
        </div> */}
        {/* projects */}
        <div className={styles["Home-projects"]}>
          <Projects />
        </div>
        {/* form */}
        <div className={styles["Home-form"]}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
