import styles from "./Input.module.scss";

interface TextareaProps {
  className?: string;
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
  className,
  label,
  placeholder,
  name,
  value,
  onChange,
}: TextareaProps) => {
  return (
    <div className={`${styles.Textarea} ${className}`}>
      <label htmlFor={label}>{label}</label>
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Textarea;
