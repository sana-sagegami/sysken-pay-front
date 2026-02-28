import { useState, type JSX } from "react";
import { BarcodeReader } from "../../components/ui/BarcodeReader";

export default function Buy(): JSX.Element {
  const [mode] = useState<"product" | "member">("product");

  const handleScan = (barcode: string) => {
    console.log("スキャンされたバーコード:", barcode);
    // バーコード処理後の処理
  };

  return (
    <div>
      <h1>商品購入</h1>
      <BarcodeReader
        mode={mode}
        onScan={handleScan}
        placeholder="バーコードをかざしてください"
      />
    </div>
  );
}
