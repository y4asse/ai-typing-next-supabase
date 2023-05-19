export const revalidate = 0;

import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const configuration = new Configuration({
    apiKey: process.env.GPT_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  let content =
    "色々な単語をランダムでを5個教えて.ただしを「-」をつけずに，番号. 英単語(日本語訳)の形式で返して，余分な記号で囲わないでください．また，例文などの余計なことは書かないでください．";

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content }],
  });
  const texts = completion.data.choices[0].message;
  console.log(texts);

  return NextResponse.json({ texts });
}
