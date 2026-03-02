import Header from "../components/layouts/Header";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Header title="シス研Pay" right="setting" shadow={true} />
      <div className={styles.container}>
        <button
          className={styles.checkoutButton}
          onClick={() => navigate("/buy")}
        >
          お会計を始める
        </button>
        <button
          className={styles.chargeButton}
          onClick={() => navigate("/charge")}
        >
          チャージ
        </button>
      </div>
    </div>
  );
}
