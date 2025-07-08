import { useState } from "react";
import { projects } from "../../services/project";
import Tag from "../Tag/Tag";
import Tittle from "../Title/Tittle";
import ProjectItem from "./ProjectItem";
import styles from "./Projects.module.scss";
import Text from "../../assets/vectors/Text/Text";

const Projects = () => {
  const [activeTag, setActiveTag] = useState<string>("All");

  return (
    <div>
      <div className={styles["Projects"]}>
        <div className={styles["Projects-container"]}>
          <div className={styles["Projects-text"]}>
            <Tittle title="Projects" className={styles["Projects-title"]} />
            <div className={styles["Projects-tags"]}>
              <Tag
                text="All"
                isActive={activeTag === "All"}
                onClick={() => setActiveTag("All")}
              />
              <Tag
                text="Web"
                isActive={activeTag === "Web"}
                onClick={() => setActiveTag("Web")}
              />
              <Tag
                text="Mobile"
                isActive={activeTag === "Mobile"}
                onClick={() => setActiveTag("Mobile")}
              />
              <Tag
                text="Desktop"
                isActive={activeTag === "Desktop"}
                onClick={() => setActiveTag("Desktop")}
              />
            </div>
          </div>
          <div className={styles["Projects-items"]}>
            {projects.map((project) => (
              <ProjectItem
                key={project.title}
                image={project.image}
                url={project.url}
              />
            ))}
          </div>
          {/* <div className=" flex justify-end my-20 ">
            <Text />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
