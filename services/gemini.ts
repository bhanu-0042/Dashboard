
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBusinessInsight = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional business analyst for HAMSAA, a high-end wholesale and retail management company. 
      The user asks: "${query}"
      Provide a concise, professional, and data-driven response. If the query is related to inventory or orders, assume a highly optimized supply chain environment.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 500,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I couldn't process that insight right now. Please check your connection or try again later.";
  }
};
