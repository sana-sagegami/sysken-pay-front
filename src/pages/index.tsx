import { PriceItemCard } from "../components/ui/PriceItemCard";
import { PriceLabel } from "../components/ui/PriceLabel";

export default function Home() {
  return (
    <div>
      <h1>ホーム</h1>
      <p>Sysken Pay システム</p>
      <PriceItemCard title="コーラ" price={100} onDelete={() => {}} />
      <PriceLabel label="コーラ" price={100} />
    </div>
  );
}
