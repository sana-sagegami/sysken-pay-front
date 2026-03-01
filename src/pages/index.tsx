import PayMethodButton from "../components/feature/buy/PayMethodButton";
import Header from "../components/layouts/Header";
import { Input } from "../components/ui/Input";

export default function Home() {
  return (
    <div>
      <Header title="決済方法" right="toTop" />
      {/* <h1>ホーム</h1>
      <p>Sysken Pay システム</p>
			<Input /> */}
      <PayMethodButton type="cash" />
      <PayMethodButton type="syspay" />
    </div>
  );
}
