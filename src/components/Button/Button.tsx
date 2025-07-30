import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  isPrimary?: boolean;
  className?: string;
}

const Button = ({
  text,
  onClick,
  isPrimary = false,
  className,
}: ButtonProps) => {
  return (
    <div
      className={`${styles.Button} ${
        isPrimary ? styles.primary : ""
      } ${className}`}
      onClick={onClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
