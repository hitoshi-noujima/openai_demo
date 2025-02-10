import OpenAI from "https://deno.land/x/openai@v4.69.0/mod.ts";

// OpenAIクライアントの初期化
const openai = new OpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});

const RECIPE_ROUTE = new URLPattern({ pathname: "/:name" });

async function handler(req: Request) {
  const match = RECIPE_ROUTE.exec(req.url);
  const name = match?.pathname.groups.name ?? "おでん";

  // ChatGPT APIを使用してストリーミング形式でレシピを生成
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "レシピ作成アシスタント" },
      { role: "user", content: name },
    ],
    model: "gpt-4o-mini",
    stream: true, // ストリーミングモードを有効化
  });

  // レスポンスストリームの作成
  const body = new ReadableStream({
    async start(controller) {
      // チャンク（データの断片）ごとに処理
      for await (const chunk of completion) {
        const message = chunk.choices[0].delta.content;

        // メッセージが未定義の場合はストリームを終了
        if (message === undefined) {
          controller.close();
          return;
        }

        // メッセージをUTF-8エンコードしてストリームに追加
        controller.enqueue(new TextEncoder().encode(message ?? ""));
      }
    },
  });

  // レスポンスの作成と返却
  const response = new Response(body, {
    headers: {
      "content-type": "text/plain;charset=utf-8",
      "x-content-type-options": "nosniff", // MIMEスニッフィングの防止
      "x-frame-options": "DENY", // クリックジャッキング対策
      "x-xss-protection": "1;mode=block", // XSS対策
    },
  });

  return response;
}

// サーバーの起動とエラーハンドリング
Deno.serve(async (req) => {
  try {
    return await handler(req);
  } catch (error) {
    console.error("Error in handler:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
});
