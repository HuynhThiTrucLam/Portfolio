import Next from "../../assets/vectors/Next/Next";
import type { Project } from "../../services/projects";
import Button from "../Button/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import styles from "./ProjectDetail.module.scss";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const handleOpenLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className={styles["ProjectDetail"]}>
      <Drawer>
        <DrawerTrigger className={styles["ProjectDetail-links"]}>
          <Next />
        </DrawerTrigger>
        <DrawerContent className={styles["ProjectDetail-container"]}>
          <DrawerClose>
            <div className={styles["ProjectDetail-content"]}>
              <div className={styles["ProjectDetail-wrapper"]}>
                <div className={styles["ProjectDetail-header"]}>
                  <h1>{project.name}</h1>
                  <p className={styles["time"]}>{project.time}</p>
                  <p>{project.description}</p>
                  <div className={styles["ProjectDetail-header-CTA"]}>
                    {project.linkToLive !== "" && (
                      <Button
                        isPrimary
                        text="See Live Action"
                        onClick={() => handleOpenLink(project.linkToLive)}
                        className={styles["ProjectDetail-header-CTA-button"]}
                      />
                    )}
                    <Button
                      text="Open in Figma"
                      onClick={() => handleOpenLink(project.linkToFigma)}
                      className={styles["ProjectDetail-header-CTA-button"]}
                      isPrimary={project.linkToLive === ""}
                    />
                  </div>
                </div>
                <div className={styles["ProjectDetail-image"]}>
                  <img src={project.subImage} alt="Project Detail" />
                </div>
              </div>
            </div>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ProjectDetail;
