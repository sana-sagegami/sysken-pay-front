import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../components/ui/Input";
import Button, { ArrowButton } from "../../../components/ui/Button";
import { CompletionModal } from "../../../components/ui/CompletionModal";
import Header from "../../../components/layouts/Header";
import { useItemStore } from "../../../store/useItemStore";

export default function ProductRegisterPage() {
  const navigate = useNavigate();
  const items = useItemStore((state) => state.items);
  const latestItem = items[items.length - 1];

  const [janCode] = useState(latestItem?.janCode ?? "");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleRegister = () => {
    if (!name.trim()) return;
    setShowModal(true);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header title="商品登録" />

      <div className="flex-1 flex flex-col justify-start pt-[10vh] px-[15vw]">
        <div className="flex flex-col gap-8">
          <Input label="JANコード" value={janCode} isDisabled />

          <div className="flex gap-6">
            <div className="flex-1">
              <Input
                label="商品名"
                placeholder="コーラ"
                value={name}
                onChange={setName}
              />
            </div>
            <div className="flex-1">
              <Input
                label="値段"
                placeholder="100"
                value={price}
                onChange={setPrice}
              />
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-center mb-[4vh]">
        <Button
          text="登録"
          buttonColor="blue"
          width="23vw"
          height="11vh"
          fontSize="2.8vw"
          onClick={handleRegister}
        />
      </div>

      <ArrowButton type="back" />

      {showModal && (
        <CompletionModal name={name} onClose={() => navigate("/admin/menu")} />
      )}
    </div>
  );
}
