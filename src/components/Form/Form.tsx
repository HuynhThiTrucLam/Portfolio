import { useRef, useState } from "react";
import { toast } from "sonner";
import Linkedin from "../../assets/images/linkedin.png";
import Telegram from "../../assets/images/telegram.png";
import Text from "../../assets/vectors/Text/Text";
import styles from "./Form.module.scss";
import Input from "./Input";
import Textarea from "./Textarea";
import emailjs from "@emailjs/browser";

interface FormData {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const Form = ({ loading, setLoading }: FormData) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    sent_at: new Date().toISOString().split("T")[0],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const { from_name, from_email, message } = formData;
    if (!from_name || !from_email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;
    const templateToOwner = import.meta.env.VITE_EMAILJS_ME_TEMPLATE_ID!;
    const templateToSender = import.meta.env.VITE_EMAILJS_SENDER_TEMPLATE_ID!;

    setLoading(true);
    try {
      await Promise.all([
        emailjs.sendForm(
          serviceID,
          templateToOwner,
          formRef.current,
          publicKey
        ),
        emailjs.sendForm(
          serviceID,
          templateToSender,
          formRef.current,
          publicKey
        ),
      ]);
      toast.success("Successfully sent message! I will get back to you soon.");
      setFormData({
        from_name: "",
        from_email: "",
        message: "",
        sent_at: new Date().toISOString(),
      });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.Form}>
      <div className={styles["Form-container"]}>
        <div className={styles["Form-text"]}>
          <Text className={styles["Form-text-icon"]} />
          <p>
            With a strong foundation in UI/UX design and front-end development,
            I’m eager to contribute, learn, and grow in every opportunity. Let’s
            collaborate to bring impactful digital products to life!
          </p>
        </div>
        <form
          ref={formRef}
          className={styles["Form-form"]}
          onSubmit={handleSendEmail}
        >
          <Input
            type="text"
            label="Your name *"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className={styles["Form-input-name"]}
          />
          <Input
            type="email"
            label="Your email *"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            className={styles["Form-input-email"]}
          />
          <Textarea
            label="Your message *"
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles["Form-input-message"]}
          />
          <input type="hidden" name="sent_at" value={formData.sent_at} />
          <div className={styles["Form-button"]}>
            <button
              className={styles["Form-button-button"]}
              type="submit"
              disabled={loading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#ffffff"
                className="size-6"
                aria-label="Send"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </form>
        <div className={styles["Form-contact"]}>
          <p>Or contact me here:</p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/lam-huynh-77b07a356/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Telegram} alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
