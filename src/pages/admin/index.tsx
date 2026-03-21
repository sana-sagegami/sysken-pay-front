import { useNavigate } from "react-router-dom";
import Headers from "../../components/layouts/Header/index";
import Button from "../../components/ui/Button/index";
import { Input } from "../../components/ui/Input";
import ArrowButton from "../../components/ui/ArrowButton";

export default function Admin() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Headers title="管理者" />
      <div className="flex-1 flex flex-col items-center justify-center gap-[10vh]">
        <h1 className="text-[2.6vw] text-blue-400 font-normal">
          パスワードを入力してください
        </h1>
        <div className="w-[35vw]">
          <Input type="password" />
        </div>
        <div>
          <Button>決定</Button>
        </div>
      </div>
      <ArrowButton variant="back" onClick={handleHome}>
        戻る
      </ArrowButton>
    </div>
  );
}
