
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getDetailedExplanation(question: string, correctAnswer: string, userAnswer: string, context: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        You are a DECA competition coach. A student got a practice question wrong.
        
        Question: ${question}
        Correct Answer: ${correctAnswer}
        Student's Answer: ${userAnswer}
        Context/Explanation: ${context}
        
        Provide a encouraging, detailed explanation of why the correct answer is right and why the student's answer might have been a common mistake. Use DECA terminology and focus on the performance indicator. Keep it under 150 words.
      `,
    });
    return response.text;
  } catch (error) {
    console.error("Error getting AI explanation:", error);
    return "Sorry, I couldn't generate a detailed explanation at this time. Please review the provided answer key.";
  }
}
