import Headers from "../../components/layouts/Header/index";
import Button, { ArrowButton } from "../../components/ui/Button/index";
import { Input } from "../../components/ui/Input";
import styles from "./Charge.module.scss";

export default function Charge() {
  return (
    <div>
      <Headers title="シス研Pay" shadow={true} />
      <div className={styles.container}>
        <h1 className={styles.text}>パスワードを入力してください</h1>
        <div className={styles.input}>
          <Input type="password" />
        </div>
        <div className={styles.button}>
          <Button
            text="決定"
            buttonColor="blue"
            width="23vw"
            height="11vh"
            fontSize="2.8vw"
          />
        </div>
      </div>
      <ArrowButton type="back" />
    </div>
  );
}
