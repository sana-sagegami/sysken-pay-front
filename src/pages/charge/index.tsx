import Header from "../../components/layouts/Header/index";
import { ArrowButton } from "../../components/ui/Button/index";
import { BarcodeReader } from "../../components/ui/BarcodeReader";

export default function Charge() {
  const handleScan = (barcode: string) => {
    console.log("スキャンされたバーコード:", barcode);
    // バーコード処理後の処理
  };
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header title="チャージ" />
      <div className="flex-1 flex flex-col items-center justify-center">
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
