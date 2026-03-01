import { useNavigate } from "react-router-dom";
import styles from "./PayMethodButton.module.scss";

interface PayMethodButtonProps {
  type: "cash" | "syspay";
}

function PayMethodButton({ type }: PayMethodButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "cash") {
      navigate("/buy");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      {type === "cash" ? (
        <button className={styles.cashButton} onClick={handleClick}>
          <div className={styles.content}>
            <img src="/icons/Cash.svg" alt="Cash" className={styles.cashIcon} />
            現金
          </div>
          <img src="/icons/LeftArrow.svg" alt="Cash" className={styles.arrow} />
        </button>
      ) : (
        <button className={styles.syspayButton} onClick={handleClick}>
          <div className={styles.content}>
            <img
              src="/icons/BlueBarcode.svg"
              alt="SysPay"
              className={styles.syspayIcon}
            />
            シス研Pay
          </div>
          <img
            src="/icons/LeftArrow.svg"
            alt="SysPay"
            className={styles.arrow}
          />
        </button>
      )}
    </div>
  );
}

export default PayMethodButton;
