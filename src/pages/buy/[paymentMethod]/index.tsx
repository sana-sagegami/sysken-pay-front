import { useParams, useNavigate } from "react-router-dom";
import { BarcodeReader } from "../../../components/ui/BarcodeReader";
import { useUserStore } from "../../../store/useUserStore";
import Header from "../../../components/layouts/Header";
import { ArrowButton } from "../../../components/ui/Button";
import Total from "../../../components/features/buy/Total";

export default function PaymentStartPage() {
  const { paymentMethod } = useParams();
  const navigate = useNavigate();
  const setScannedUser = useUserStore((state) => state.setScannedUser);

  // syspay: 学生証スキャン後に確認画面へ
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
      {paymentMethod === "cash" ? (
        <>
          <Header title="現金支払い" right="toTop" />
          <Total title="お金を箱に入れてください" label="合計" showButton />
        </>
      ) : (
        <>
          <Header title="シスPay支払い" right="toTop" />
          <BarcodeReader
            mode="member"
            onScan={handleScan}
            placeholder="学生証のバーコードをかざしてください"
          />
        </>
      )}
      <ArrowButton type="back" />
    </div>
  );
}
