import Button from "../Button/Button";
import styles from "./About.module.scss";
interface AboutProps {
  startTime: string;
  endTime: string;
  title: string;
  description: string;
  buttonText: string;
  link?: string;
}
const About = ({
  startTime,
  endTime,
  title,
  description,
  buttonText,
  link,
}: AboutProps) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else {
      console.log("No link provided");
    }
  };
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
        <p>
          {description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
      <div className={styles["About-button"]}>
        <Button text={buttonText} onClick={handleClick} isPrimary />
      </div>
    </div>
  );
};

export default About;
