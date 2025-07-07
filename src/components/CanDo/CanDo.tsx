import Decorate from "../../assets/vectors/Decorate/Decorate";
import Tittle from "../Title/Tittle";
import styles from "./CanDo.module.scss";

const CanDo = () => {
  return (
    <div className={styles["CanDo"]}>
      <div className={styles["CanDo-container"]}>
        <Tittle title="what i CAN do" className={styles["CanDo-title"]} />
      </div>
      <div className={styles["CanDo-decorate"]}>
        <Decorate />
      </div>
    </div>
  );
};

export default CanDo;
