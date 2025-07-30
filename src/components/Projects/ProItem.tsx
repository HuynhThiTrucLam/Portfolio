import type { Project } from "../../services/projects";
import styles from "./ProItem.module.scss";
import ProjectDetail from "./ProjectDetail";

interface ProItemProps {
  project: Project;
}

const ProItem = ({ project }: ProItemProps) => {
  return (
    <div className={styles["ProItem"]}>
      <div className={styles["ProItem-image"]}>
        <img src={project.image} alt={project.name} />
      </div>
      <div className={styles["ProItem-content"]}>
        <div className={styles["ProItem-title-mobile"]}>
          <p>{project.description}</p>
          <div className={styles["ProItem-CTA"]}>
            <ProjectDetail project={project} />
          </div>
        </div>
        <div className={styles["ProItem-title-desktop"]}>
          <ProjectDetail project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProItem;
