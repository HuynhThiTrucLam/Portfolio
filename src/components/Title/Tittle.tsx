import styles from "./Tittle.module.scss";

export type TittleProps = {
  title: string;
  className?: string;
};

const Tiltle = ({ title, className }: TittleProps) => {
  return <p className={`${styles.Tittle} ${className}`}>{title}</p>;
};

export default Tiltle;
