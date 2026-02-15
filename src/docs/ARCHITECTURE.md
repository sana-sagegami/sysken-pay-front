# ディレクトリ構成とアーキテクチャ

このプロジェクトは **Vite + React (SPA)** で構築されており、クリーンアーキテクチャ（レイヤーアーキテクチャ）の考え方を採用しています。
機能ごとではなく「役割（レイヤー）」ごとにトップレベルのディレクトリを分割しています。

## ディレクトリ構造

```text
src/
├── main.tsx                # エントリーポイント
├── App.tsx                 # 全体のプロバイダー設定
├── routes.tsx              # ルーティング定義 (React Router)
│
├── adapter/                # 【Infra層】 外部通信・実装詳細
│   ├── api/                # Axios等のクライアント設定
│   ├── repository/         # APIを叩く実装 (RepositoryImpl)
│   └── storage/            # LocalStorage操作など
│
├── usecases/               # 【Application層】 ユーザー操作のシナリオ
│   ├── CartUsecase.ts      # 「カートに追加」「会計」などの一連の流れ
│   └── AuthUsecase.ts      # ログイン処理など
│
├── services/               # 【Domain Service】 純粋なビジネスロジック
│   ├── TaxService.ts       # 税計算 (状態を持たない)
│   └── DiscountService.ts  # 割引計算
│
├── pages/                  # 【UI】 ページコンポーネント (1ページ=1ファイル)
│   ├── admin/
│   ├── buy/
│   └── charge/
│
├── components/             # 【UI】 再利用可能な部品
│   ├── ui/                 # 汎用パーツ (Button, Input)
│   ├── layouts/            # ヘッダー, フッター
│   └── features/           # 特定機能に紐づくパーツ (ProductCardなど)
│
├── store/                  # 【State】 グローバル状態管理 (Zustand/Jotai)
│   └── useCartStore.ts
│
├── hooks/                  # 【Connect】 ViewとUsecaseを繋ぐフック
│   └── useCart.ts          # UIから呼ばれるカスタムフック
│
├── types/                  # 【Domain】 型定義
│   ├── domain/             # ビジネスロジックで使う型
│   └── dto/                # APIのリクエスト/レスポンス型
│
└── utils/                  # 汎用ユーティリティ