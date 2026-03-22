```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function testGemini() {
  try {
    const prompt = "Write a haiku about JavaScript.";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log("Gemini Response:", response.text());
  } catch (error) {
    console.error("Error testing Gemini API:", error);
  }
}

testGemini();
console.log("Hello, world!");
```