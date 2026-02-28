import Headers from "../../components/layouts/Header/index";
import { ArrowButton } from "../../components/ui/Button/index";
import styles from "./Charge.module.scss";

export default function Charge() {
  return (
    <div>
      <Headers title="シス研Pay" shadow={true} />
      <div className={styles.container}></div>
      <ArrowButton type="back" />
    </div>
  );
}
