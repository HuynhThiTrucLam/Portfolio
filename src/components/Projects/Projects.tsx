import React, { useState } from "react";
import { projectsMock } from "../../services/project";
import Tag from "../Tag/Tag";
import Tittle from "../Title/Tittle";
import ProjectItem from "./ProjectItem";
import styles from "./Projects.module.scss";

const Projects = () => {
  const [activeTag, setActiveTag] = useState<string>("All");

  // Filter projects based on the active tag
  const filteredProjects =
    activeTag === "All"
      ? projectsMock
      : projectsMock.filter((project) => project.type === activeTag);

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
                text="Graphic"
                isActive={activeTag === "Graphic"}
                onClick={() => setActiveTag("Graphic")}
              />
            </div>
          </div>
          <div className={styles["Projects-items"]}>
            {filteredProjects.map((project, index) => (
              <React.Fragment key={project.title}>
                <ProjectItem
                  index={index + 1}
                  title={project.title}
                  type={project.type}
                  date={project.date}
                  image={project.image}
                  url={project.url}
                />
                {index === 0 && (
                  <div className={styles["Projects-extra"]}>
                    <img
                      className="w-full h-full object-cover"
                      src="https://i.pinimg.com/736x/d8/90/b5/d890b544ec6ad789fc26850a5a8466c4.jpg"
                      alt=""
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
