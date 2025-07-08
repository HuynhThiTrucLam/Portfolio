import Next from "../../assets/vectors/Next/Next";
import styles from "./ProjectItem.module.scss";

interface ProjectItemProps {
  image: string;
  url: string;
}

const ProjectItem = ({ image, url }: ProjectItemProps) => {
  return (
    <div className={styles.ProjectItem}>
      <div className={styles["ProjectItem-image"]}>
        <img src={image} alt="project" />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["ProjectItem-links"]}
        >
          <Next className={styles["ProjectItem-links-next"]} />
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
