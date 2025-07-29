import { useState } from "react";
import penIcon from "../assets/pen.svg";
import presentIcon from "../assets/present.svg";
import puzzleIcon from "../assets/puzzle.svg";
import strokeIcon from "../assets/stroke.svg";
import Girl from "../assets/vectors/Girl/Girl";
import ProjectPotser from "../assets/vectors/ProjectPoster/ProjectPotser";
import About from "../components/About/About";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import ProjectItem from "../components/Projects/ProjectItem";
import Tiltle from "../components/Title/Tittle";
import { projectsMock, type Project } from "../services/projects";
import styles from "./Home.module.scss";
import TitleAbout from "../assets/AboutMe.svg";
import TitleProjects from "../assets/MyProjects.svg";

const Home = () => {
  const [projects, setProjects] = useState<Project[]>(projectsMock);

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
              <div className={styles["line"]}></div>
              <div className={styles["icons"]}>
                <div className={styles["item"]}>
                  <img src={presentIcon} alt="present" />
                </div>
                <div className={styles["item"]}>
                  <img src={puzzleIcon} alt="puzzle" />
                </div>
                <div className={styles["item"]}>
                  <img src={strokeIcon} alt="stroke" />
                </div>
                <div className={styles["item"]}>
                  <img src={penIcon} alt="pen" />
                </div>
              </div>
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
            <img
              src={TitleAbout}
              alt="TitleAbout"
              className={styles["mobile-title"]}
            />
            <div className={styles["Home-About-items"]}>
              <About
                startTime="2022"
                endTime="Now"
                title="Education"
                description="I am currently a third-year undergraduate student majoring in Information Technology at the University of Transport and Communications – Ho Chi Minh City Campus."
                buttonText="Download CV"
              />
              <About
                startTime="April 2024"
                endTime="May 2024"
                title="Certifications"
                description={`Google UX Design Professional Certificate
Issued by Coursera / Google
Completed: [Tháng/Năm]
Credential ID: [Mã chứng chỉ nếu có]
Link to Certificate (nếu có thể chia sẻ công khai)`}
                buttonText="See Certificate"
                link="https://coursera.org/share/10831d5c47d6cbe1e530eb09de81473a"
              />
            </div>
          </div>
        </section>

        {/* projects */}
        <section
          className={`${styles["Home-section"]} ${styles["Home-projects-section"]}`}
        >
          <div className={styles["Home-Projects"]}>
            <Tiltle title="My Projects" />
            <img
              src={TitleProjects}
              alt="TitleProjects"
              className={styles["mobile-title"]}
            />
            <div className={styles["Home-Projects-poster"]}>
              <ProjectPotser />
            </div>
            {projects.map((project, index) =>
              index % 2 != 0 ? (
                <ProjectItem
                  index={index + 1}
                  key={project.id}
                  time={project.time}
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  link={project.link}
                  isLeft={false}
                />
              ) : (
                <ProjectItem
                  index={index + 1}
                  key={project.id}
                  time={project.time}
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  link={project.link}
                  isLeft={true}
                />
              )
            )}
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
