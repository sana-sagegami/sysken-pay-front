import { useState, type JSX } from "react";
import { BarcodeReader } from "../../components/ui/BarcodeReader";
import Header from "../../components/layouts/Header";
import { ArrowButton } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useItemStore } from "../../store/useItemStore";

export default function Buy(): JSX.Element {
  const [mode] = useState<"product" | "member">("product");
  const navigate = useNavigate();
  const addItem = useItemStore((state) => state.addItem);

  const handleScan = (barcode: string) => {
    console.log("スキャンされたバーコード:", barcode);
    // TODO: barcodeを使ってAPIから商品情報を取得してaddItem
    addItem({
      id: barcode,
      name: "商品名",
      price: 100,
      janCode: barcode,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    // バーコード処理後の/buy/listへ遷移
    navigate("/buy/list");
  };

  return (
    <div>
      <Header title="商品購入" />
      <BarcodeReader
        mode={mode}
        onScan={handleScan}
        placeholder="商品のバーコードをかざしてください"
      />

      <ArrowButton type="back" />
    </div>
  );
}
