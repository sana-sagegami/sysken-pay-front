import Headers from "../../components/layouts/Header/index";
import Button, { ArrowButton } from "../../components/ui/Button/index";

export default function Admin() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Headers title="管理者" />
      <div className="flex-1 flex flex-col items-center justify-center gap-[10vh]">
        <div>
          <Button
            text="ユーザー登録"
            buttonColor="blue"
            width="23vw"
            height="11vh"
            fontSize="2.8vw"
          />
          <Button
            text="商品登録"
            buttonColor="blue"
            width="23vw"
            height="11vh"
            fontSize="2.8vw"
          />
          <Button
            text="商品更新"
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
