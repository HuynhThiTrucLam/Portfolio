import Button from "../Button/Button";
import styles from "./About.module.scss";
interface AboutProps {
  startTime: string;
  endTime: string;
  title: string;
  description: string;
  buttonText: string;
}
const About = ({
  startTime,
  endTime,
  title,
  description,
  buttonText,
}: AboutProps) => {
  return (
    <div className={styles["About"]}>
      <div className={styles["About-time"]}>
        <p>
          <span>{startTime}</span> / {endTime}
        </p>
      </div>
      <div className={styles["About-text"]}>
        <h2>{title}</h2>
      </div>
      <div className={styles["About-description"]}>
        <p>{description}</p>
      </div>
      <div className={styles["About-button"]}>
        <Button text={buttonText} onClick={() => {}} isPrimary />
      </div>
    </div>
  );
};

export default About;
