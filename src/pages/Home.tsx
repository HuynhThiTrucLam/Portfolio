import { useEffect, useState } from "react";
import TitleAbout from "../assets/AboutMe.svg";
import TitleProjects from "../assets/MyProjects.svg";
import penIcon from "../assets/pen.svg";
import presentIcon from "../assets/present.svg";
import puzzleIcon from "../assets/puzzle.svg";
import strokeIcon from "../assets/stroke.svg";
import Girl from "../assets/vectors/Girl/Girl";
import ProjectPotser from "../assets/vectors/ProjectPoster/ProjectPotser";
import About from "../components/About/About";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import ProItem from "../components/Projects/ProItem";
import Tiltle from "../components/Title/Tittle";
import { aboutMock, type About as AboutType } from "../services/about";
import { projectsMock, type Project } from "../services/projects";
import styles from "./Home.module.scss";

const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [abouts, setAbouts] = useState<AboutType[]>([]);

  useEffect(() => {
    setProjects(projectsMock);
    setAbouts(aboutMock);
  }, []);

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
              {abouts.map((about, index) => (
                <About
                  key={index}
                  startTime={about.startTime}
                  endTime={about.endTime}
                  title={about.title}
                  description={about.description}
                  buttonText="See Certificate"
                  link={about.link}
                />
              ))}
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
            {/* {projects.map((project, index) =>
              index % 2 != 0 ? (
                <ProjectItem
                  index={index + 1}
                  key={project.id}
                  time={project.time}
                  name={project.name}
                  image={project.image}
                  subImage={project.image}
                  description={project.description}
                  linkToLive={project.linkToLive}
                  linkToFigma={project.linkToFigma}
                  isLeft={false}
                />
              ) : (
                <ProjectItem
                  index={index + 1}
                  key={project.id}
                  time={project.time}
                  name={project.name}
                  image={project.image}
                  subImage={project.image}
                  description={project.description}
                  linkToLive={project.linkToLive}
                  linkToFigma={project.linkToFigma}
                  isLeft={true}
                />
              )
            )} */}
            <div className={styles["Home-Projects-items"]}>
              {projects.map((project, index) => (
                <ProItem key={project.id} project={project} />
              ))}
            </div>
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
