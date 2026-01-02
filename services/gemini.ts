import { GoogleGenAI } from "@google/genai";

// Always use the process.env.API_KEY string directly and use a named parameter for initialization.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
        // When setting maxOutputTokens, thinkingConfig: { thinkingBudget } must also be set for Gemini 3 series models.
        maxOutputTokens: 500,
        thinkingConfig: { thinkingBudget: 250 },
      }
    });
    // Use the .text property directly from GenerateContentResponse.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I couldn't process that insight right now. Please check your connection or try again later.";
  }
};