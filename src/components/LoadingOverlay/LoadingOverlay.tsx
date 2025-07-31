import Lottie from "lottie-react";
import loadingIcon from "../../assets/images/Loading.json";
import styles from "./LoadingOverlay.module.scss";

interface LoadingOverlayProps {
  isVisible: boolean;
}

const LoadingOverlay = ({ isVisible }: LoadingOverlayProps) => {
  if (!isVisible) return null;

  return (
    <div className={styles.LoadingOverlay}>
      <div className={styles["LoadingOverlay-content"]}>
        <div className={styles["LoadingOverlay-icon"]}>
          <Lottie animationData={loadingIcon} loop={true} />
        </div>
        <p className={styles["LoadingOverlay-text"]}>Sending your message...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
