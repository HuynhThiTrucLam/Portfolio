import Next from "../../assets/vectors/Next/Next";
import Button from "../Button/Button";
import styles from "./ProjectItem.module.scss";

interface ProjectItemProps {
  index: number;
  time: string;
  name: string;
  image: string;
  description: string;
  link: string;
  isLeft: boolean;
}

const ProjectItem = ({
  index,
  time,
  name,
  image,
  description,
  link,
  isLeft,
}: ProjectItemProps) => {
  return (
    <div className={styles["ProjectItem"]}>
      <div
        className={`${styles["ProjectItem-image"]} ${
          isLeft ? styles["reversed"] : ""
        }`}
      >
        <img src={image} alt={name} />
        <p>{description}</p>
        <div className={styles["ProjectItem-image-links"]}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            See More Details
          </a>
          <Next />
        </div>
      </div>
      <div
        className={`${styles["ProjectItem-text"]} ${
          isLeft ? styles["reversed"] : ""
        }`}
      >
        <div className={styles["ProjectItem-no"]}>
          <p>0{index}</p>
        </div>
        <div className={styles["ProjectItem-time"]}>
          <p>{time}</p>
        </div>

        <div className={styles["ProjectItem-button"]}>
          <Button text="See Project" onClick={() => {}} isPrimary></Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
