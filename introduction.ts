import { google } from "@ai-sdk/google";
import { generateText, streamText } from "ai";
import dotenv from "dotenv";
dotenv.config();

// Running some basic inference
async function generation() {
  const { text } = await generateText({
    model: google("gemini-2.5-flash",),
    prompt: "Hello.",
  });

  return text
}

const text = await generation()
console.log(text)

// Doing Streaming
const { textStream } = await streamText({
  model: google("gemini-2.5-flash",),
  prompt: "Give me some paras about google.",
});


for await (const textPart of textStream) {
  console.log(textPart)
}