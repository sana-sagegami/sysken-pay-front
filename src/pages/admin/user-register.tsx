import { useState } from "react";
import { BarcodeReader } from "../../components/ui/BarcodeReader";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layouts/Header";
import { ArrowButton } from "../../components/ui/Button";
import { useUserStore } from "../../store/useUserStore";

export default function UserRegisterPage() {
  const [mode] = useState<"product" | "member">("member");
  const navigate = useNavigate();
	const setScannedUser = useUserStore((state) => state.setScannedUser);
	

  const handleScan = (barcode: string) => {
    // TODO: APIからUser情報を取得
    setScannedUser({
      userId: barcode,
      userName: "さな",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    navigate("/buy/syspay/confirm");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header title="商品購入" />
      <div className="flex flex-1 items-center justify-center">
        <BarcodeReader
          mode={mode}
          onScan={handleScan}
          placeholder="学生証のバーコードをかざしてください"
        />
      </div>
      <ArrowButton type="back" />
    </div>
  );
}
