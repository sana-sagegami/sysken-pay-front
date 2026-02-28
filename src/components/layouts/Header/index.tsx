import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

interface HeaderProps {
  title: string;
  right?: "setting" | "toTop" | "none"; //デフォルト:none , setting:設定アイコンの表示, toTop:[最初に戻る]のテキストの表示, none:何も無し
  shadow?: boolean; //デフォルト:false , false:Headerの下に影無し, true:Headerの下に影有り
}

function Header({ title, right = "none", shadow = false }: HeaderProps) {
  return (
    <div
      className={styles.header}
      style={{ boxShadow: shadow ? "0 1.8px 9px 0 #17223330" : "none" }}
    >
      <div className={styles.left}>
        <img src="/icons/Sysken.png" alt="Icon" className={styles.icon} />
        <h1 className={styles.title}>{title}</h1>
      </div>
      {right === "setting" && (
        <Link to="/admin">
          <img
            src="/icons/Setting.svg"
            alt="Setting"
            className={styles.setting}
          />
        </Link>
      )}
      {right === "toTop" && (
        <Link to="/" className={styles.link}>
          <h1 className={styles.toTop}>最初に戻る</h1>
        </Link>
      )}
    </div>
  );
}

export default Header;
