import Next from "../../assets/vectors/Next/Next";
import Button from "../Button/Button";
import styles from "./ProjectItem.module.scss";

const ProjectItem = () => {
  return (
    <div className={styles["ProjectItem"]}>
      <div className={styles["ProjectItem-image"]}>
        <img
          src="https://i.pinimg.com/1200x/77/65/c0/7765c038a884f80e239cca434f5d7c5f.jpg"
          alt=""
        />
        <p>
          Lorem Ipsum is siLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever{" "}
        </p>
        <div className={styles["ProjectItem-image-links"]}>
          <p>See More Details</p>
          <Next />
        </div>
      </div>
      <div className={styles["ProjectItem-text"]}>
        <div className={styles["ProjectItem-no"]}>
          <p>01</p>
        </div>
        <div className={styles["ProjectItem-time"]}>
          <p>July 2025 - Autumn 2025</p>
        </div>

        <div className={styles["ProjectItem-button"]}>
          <Button text="See Project" onClick={() => {}} isPrimary></Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
