import Header from "../../components/layouts/Header";
import Button from "../../components/ui/Button";

export default function Admin() {
  return (
    <div>
      <Header title="管理者" />
      <Button
        size="large"
        onClick={() => (window.location.href = "/admin/dashboard")}
      >
        ユーザー登録
      </Button>
      <Button
        size="large"
        onClick={() => (window.location.href = "/admin/charge")}
      >
        商品登録
      </Button>
      <Button
        size="large"
        onClick={() => (window.location.href = "/admin/transaction")}
      >
        商品更新
      </Button>
      <Button
        variant="backButton"
        onClick={() => (window.location.href = "/admin")}
      >
        戻る
      </Button>
    </div>
  );
}
