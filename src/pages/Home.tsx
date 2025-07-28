import Girl from "../assets/vectors/Girl/Girl";
import About from "../components/About/About";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import ProjectItem from "../components/Projects/ProjectItem";
import Tiltle from "../components/Title/Tittle";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles["Home-container"]}>
        {/* top */}
        <section className={styles["Home-section"]}>
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
        </section>

        {/* objective */}
        <section className={styles["Home-section"]}>
          <div className={styles["Home-Objective"]}>
            <div className={styles["Home-Objective-text"]}>
              <h2>
                I believe that design <br></br> not just as how <br></br> things
                look, but <br></br> as{" "}
                <span>
                  a way to <br></br> build engaging <br></br> and deeply
                  impactful experiences
                </span>
              </h2>
            </div>
            <div className={styles["Home-Objective-link"]}>
              <p>See Projects</p>
            </div>
            <div className={styles["Home-Objective-CTA"]}>
              <p>
                Designing isn’t just my job — it’s my jam. I turn chaos into
                scroll-worthy, sleek magic.
              </p>
              <Button
                text="Get in touchs"
                onClick={() => {}}
                isPrimary
              ></Button>
            </div>
            <div className={styles["Home-Objective-decorate"]}>
              <div className={styles["Home-Objective-box"]}></div>
              <div className={styles["Home-Objective-box"]}></div>
              <div className={styles["Home-Objective-box"]}></div>
            </div>
          </div>
        </section>

        {/* about */}
        <section className={styles["Home-section"]}>
          <div className={styles["Home-About"]}>
            <Tiltle title="About me" className={styles["Home-About-title"]} />
            <div className={styles["Home-About-items"]}>
              <About
                startTime="2022"
                endTime="Now"
                title="Education"
                description="I am a student at the University of Technology, Ho Chi Minh City. I am a student at the University of Technology, Ho Chi Minh City. I am a student at the University of Technology, Ho Chi Minh City."
                buttonText="Download CV"
              />
              <About
                startTime="2022"
                endTime="Now"
                title="Certifications"
                description="I am a student at the University of Technology, Ho Chi Minh City. I am a student at the University of Technology, Ho Chi Minh City. I am a student at the University of Technology, Ho Chi Minh City."
                buttonText="Download CV"
              />
            </div>
          </div>
        </section>

        {/* projects */}
        <section className={styles["Home-section"]}>
          <div className={styles["Home-Projects"]}>
            <Tiltle title="My Projects" />
            <ProjectItem />
          </div>
        </section>

        {/* form */}
        <section className={styles["Home-section"]}>
          <div className={styles["Home-form"]}>
            <Form />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
