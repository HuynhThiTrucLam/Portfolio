import styles from "./Input.module.scss";

interface TextareaProps {
  className?: string;
  label: string;
  placeholder: string;
}

const Textarea = ({ className, label, placeholder }: TextareaProps) => {
  return (
    <div className={`${styles.Textarea} ${className}`}>
      <label htmlFor={label}>{label}</label>
      <textarea placeholder={placeholder} />
    </div>
  );
};

export default Textarea;
