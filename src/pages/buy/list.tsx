import { ArrowButton } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { ItemList } from "../../components/features/buy/ItemList";
import { useItemStore } from "../../store/useItemStore";
import Header from "../../components/layouts/Header";

export default function BuyListPage() {
  const navigate = useNavigate();
  const { items, removeItem } = useItemStore();

  return (
    <div>
      <Header title="商品購入" right="toTop" />
      <ItemList Items={items} onDelete={removeItem} />
      <ArrowButton type="back" onClick={() => navigate("/buy")} />
      <ArrowButton type="next" onClick={() => navigate("/buy/confirm")} />
    </div>
  );
}
