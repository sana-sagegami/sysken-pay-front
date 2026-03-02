import Header from "../../components/layouts/Header/index";
import { ArrowButton } from "../../components/ui/Button/index";
import { BarcodeReader } from "../../components/ui/BarcodeReader";
import styles from "./Charge.module.scss";

export default function Charge() {
  const handleScan = (barcode: string) => {
    console.log("スキャンされたバーコード:", barcode);
    // バーコード処理後の処理
  };
  return (
    <div>
      <Header title="チャージ" />
      <div className={styles.container}>
        <BarcodeReader
          mode="member"
          onScan={handleScan}
          placeholder="学生証のバーコードをかざしてください"
        />
      </div>
      <ArrowButton type="back" />
    </div>
  );
}
