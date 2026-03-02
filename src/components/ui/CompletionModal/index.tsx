import Button from "../Button";
import styles from "./CompletionModal.module.scss";

type Props = {
  name: string;
  onClose: () => void;
};

export const CompletionModal = ({ name, onClose }: Props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.message}>
          <span className={styles.name}>{name}</span>
          <span className={styles.san}>さん</span>
          <br />
          の登録が完了しました
        </p>
        <Button
          text="ホームへ戻る"
          buttonColor="blue"
          fontSize="33px"
          onclick={onClose}
        ></Button>
      </div>
    </div>
  );
};
