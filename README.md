# レシピ生成ストリーミングサービス

このプロジェクトは、Deno を利用して OpenAI の ChatGPT API を用いたレシピ生成のストリーミングサービスを実装しています。
URL 上のレシピ名に基づいて、チャット形式でリアルタイムにレシピが生成されます。

## 特徴

- **シンプルなルーティング**
  URL パターン `/:name` により、クエリからレシピ名を取得し、指定されたレシピを生成します。

## 必要条件

- [Deno](https://deno.land/)（最新バージョン推奨）
- OpenAI API キーを環境変数 `OPENAI_API_KEY` に設定
  （例: `export OPENAI_API_KEY=your_openai_api_key`）

## セットアップ方法

1. リポジトリのクローン

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. OpenAI の API キーを環境変数に設定
   例:

   ```bash
   export OPENAI_API_KEY=your_openai_api_key
   ```

3. 初回起動時に Deno が必要な依存ファイルを自動的にダウンロードします。

## 起動方法

Deno タスクを用いてサーバーを起動します。
以下のコマンドで開発サーバーが起動し、コード変更時に自動で再起動されます。

```bash
deno run dev
```

サーバーが起動したら、ブラウザで以下の URL にアクセスしてください。

例:
http://localhost:8000/おでん
