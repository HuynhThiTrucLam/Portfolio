import Next from "../../assets/vectors/Next/Next";
import styles from "./ProjectItem.module.scss";

interface ProjectItemProps {
  index: number;
  title: string;
  type: string;
  image: string;
  date: string;
  url: string;
}

const ProjectItem = ({
  index,
  title,
  type,
  image,
  date,
  url,
}: ProjectItemProps) => {
  return (
    <div
      className={
        styles.ProjectItem +
        (index % 2 === 0 ? " " + styles["ProjectItem-even"] : "")
      }
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <div className={styles["ProjectItem-index"]}>
        {index < 10 ? `0${index}` : index}
      </div>
      <div className={styles["ProjectItem-content"]}>
        <div className="w-full flex flex-col gap-1">
          <p className={styles["ProjectItem-content-title"]}>{title}</p>
          <p className={styles["ProjectItem-content-type"]}>{type}</p>
        </div>
        <div className={styles["ProjectItem-image"]}>
          <img src={image} alt="project" />
        </div>
        <div className={styles["ProjectItem-links"]}>
          <p className={styles["ProjectItem-date"]}>
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Next className={styles["ProjectItem-links-next"]} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
