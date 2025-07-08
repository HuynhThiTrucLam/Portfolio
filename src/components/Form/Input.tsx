import styles from "./Input.module.scss";

interface InputProps {
  className?: string;
  type: string;
  label: string;
}

const Input = ({ className, type, label }: InputProps) => {
  return (
    <div className={`${styles.Input} ${className}`}>
      <label htmlFor={label}>{label}</label>
      <input type={type} placeholder={""} />
    </div>
  );
};

export default Input;
