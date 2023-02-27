import { DivisaFormater } from "../../../utils/DivisaFormater";
import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
  totalAmount: number;
  currentAmount: number;
};

const ProgressBar = ({ totalAmount, currentAmount }: ProgressBarProps) => {
  const percentage = (currentAmount / totalAmount) * 100;

  const containerStyle = {
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: "20px",
    overflow: "hidden",
  };

  const barStyle = {
    width: `${percentage}%`,
    height: "20px",
    backgroundColor: percentage === 100 ? "#27ae60" : "#1b2536",
    borderRadius: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={barStyle}>
        <span className={styles.progressBarText}>
          {percentage === 100
            ? "Meta alcanzada"
            : `${DivisaFormater(currentAmount)} de ${DivisaFormater(
                totalAmount
              )}`}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
