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
  return (
    <div className={styles["ProjectDetail"]}>
      <Drawer>
        <DrawerTrigger>
          <div className={styles["ProjectDetail-links"]}>
            <p>See More Details</p>
            <Next />
          </div>
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
                    <Button
                      isPrimary
                      text="See Live Action"
                      onClick={() => {
                        window.open(project.linkToLive, "_blank");
                      }}
                      className={styles["ProjectDetail-header-CTA-button"]}
                    />
                    <Button
                      text="Open in Figma"
                      onClick={() => {
                        window.open(project.linkToFigma, "_blank");
                      }}
                      className={styles["ProjectDetail-header-CTA-button"]}
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
