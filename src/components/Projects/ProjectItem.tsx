import Button from "../Button/Button";
import ProjectDetail from "./ProjectDetail";
import styles from "./ProjectItem.module.scss";

interface ProjectItemProps {
  index: number;
  time: string;
  name: string;
  image: string;
  subImage: string;
  description: string;
  linkToLive: string;
  linkToFigma: string;
  isLeft: boolean;
}

const ProjectItem = ({
  index,
  time,
  name,
  image,
  subImage,
  description,
  linkToLive,
  linkToFigma,
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
        <ProjectDetail
          project={{
            id: index.toString(),
            time,
            name,
            description,
            image,
            subImage,
            linkToLive,
            linkToFigma,
          }}
        />
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
