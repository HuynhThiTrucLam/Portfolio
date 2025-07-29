import Linkedin from "../../assets/images/linkedin.png";
import Telegram from "../../assets/images/telegram.png";
import Text from "../../assets/vectors/Text/Text";
import styles from "./Form.module.scss";
import Input from "./Input";
import Textarea from "./Textarea";

const Form = () => {
  return (
    <div className={styles.Form}>
      <div className={styles["Form-container"]}>
        <div className={styles["Form-text"]}>
          <Text className={styles["Form-text-icon"]} />
          <p>
            Lorem Ipsum is siLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s standard dummy text
          </p>
        </div>
        <div className={styles["Form-form"]}>
          <Input type="text" label="Your name" />
          <Input type="email" label="Your email" />
          <Textarea label="Your message" placeholder="Your message" />
        </div>
        <div className={styles["Form-contact"]}>
          <p>Or contact me here:</p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/lam-huynh-77b07a356/"
              target="_blank"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
            <a href="#" target="_blank">
              <img src={Telegram} alt="Telegram" />
            </a>
          </div>
        </div>
        <div className={styles["Form-button"]}>
          <button className={styles["Form-button-button"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
