# レシピ生成ストリーミングサービス

このプロジェクトは、Deno を利用して OpenAI の ChatGPT API を用いたレシピ生成のストリーミングサービスを実装しています。
URL 上のレシピ名に基づいて、チャット形式でリアルタイムにレシピが生成されます。

## 特徴

- **シンプルなルーティング**
  URL パターン `/:name` により、クエリからレシピ名を取得し、指定されたレシピを生成します。

## 必要条件

以下のいずれかの環境が必要です：

### Docker を使用する場合

- Docker
- Docker Compose

### ローカルで直接実行する場合

- [Deno](https://deno.land/)（最新バージョン推奨）

共通の要件：

- OpenAI API キー

## セットアップ方法

1. リポジトリのクローン

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. 環境変数の設定
   `.env` ファイルを作成し、OpenAI API キーを設定します：

   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```

## 起動方法

### Docker を使用する場合

Docker Compose を使用してアプリケーションを起動します：

```bash
docker compose up
```

開発時はコード変更を検知して自動で再起動されます。

### ローカルで直接実行する場合

Deno を使用して直接サーバーを起動します：

```bash
deno run dev
```

## アクセス方法

サーバーが起動したら、ブラウザで以下の URL にアクセスしてください：

例:
http://localhost:8000/おでん
