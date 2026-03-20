import Header from "../../components/layouts/Header/index";
import Button from "../../components/ui/Button/index";
import { BarcodeReader } from "../../components/ui/BarcodeReader";
import { useNavigate } from "react-router-dom";

export default function Charge() {
  const navigate = useNavigate();
  const handleScan = (barcode: string) => {
    console.log("スキャンされたバーコード:", barcode);
    // バーコード処理後の処理
  };
  const handleHome = () => {
    navigate("/");
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
      <Button variant="backButton" onClick={handleHome}>
        戻る
      </Button>
    </div>
  );
}
