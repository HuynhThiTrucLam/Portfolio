import styles from "./Tittle.module.scss";

export type TittleProps = {
  title: string;
};

const Tiltle = ({ title }: TittleProps) => {
  return <p className={styles.Tittle}>{title}</p>;
};

export default Tiltle;
