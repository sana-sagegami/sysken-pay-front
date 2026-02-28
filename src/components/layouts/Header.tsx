import icon from "../../../public/img/syskenicon.png";
import setting from "../../../public/img/setting.png";
import "./Header.css";

interface HeaderProps {
  title: string;
  right?: "setting" | "toTop" | "none"; //デフォルト:none , setting:設定アイコンの表示, toTop:[最初に戻る]のテキストの表示, none:何も無し
  shadow?: boolean; //デフォルト:false , false:Headerの下に影無し, true:Headerの下に影有り
}

function Header({ title, right = "none", shadow = false }: HeaderProps) {
  return (
    <div
      className="header"
      style={{ boxShadow: shadow ? "0 1.8px 9px 0 #17223330" : "none" }}
    >
      <div className="left">
        <img src={icon} alt="Icon" className="icon" />
        <h1 className="title">{title}</h1>
      </div>
      {right === "setting" && (
        <img src={setting} alt="Setting" className="setting" />
      )}
      {right === "toTop" && <h1 className="toTop">最初に戻る</h1>}
    </div>
  );
}

export default Header;
