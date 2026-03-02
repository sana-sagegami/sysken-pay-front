import Headers from "../../components/layouts/Header/index";
import Button, { ArrowButton } from "../../components/ui/Button/index";
import { Input } from "../../components/ui/Input";

export default function Admin() {
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
          <Button
            text="決定"
            buttonColor="blue"
            width="23vw"
            height="11vh"
            fontSize="2.8vw"
          />
        </div>
      </div>
      <ArrowButton type="back" />
    </div>
  );
}
