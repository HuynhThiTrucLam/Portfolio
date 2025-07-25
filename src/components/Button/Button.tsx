import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  isPrimary?: boolean;
}

const Button = ({ text, onClick, isPrimary = false }: ButtonProps) => {
  return (
    <div
      className={`${styles.Button} ${isPrimary ? styles.primary : ""}`}
      onClick={onClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
