import styles from "./Input.module.scss";

interface InputProps {
  className?: string;
  type: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  className,
  type,
  label,
  name,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className={`${styles.Input} ${className}`}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={""}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
