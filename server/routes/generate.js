const express = require("express");
const router = express.Router();
const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/generate", async (req, res) => {
  const { prompt, language } = req.body;

  if (!prompt || !language) {
    return res.status(400).json({ error: "Prompt and language are required" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an expert ${language} developer. Write clean, well-commented code based on user prompts.`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.5,
    });

    const aiCode = completion.choices[0].message.content.trim();
    res.json({ aiCode });
  } catch (error) {
    console.error("❌ OpenAI Error:", error.message);
    res.status(500).json({ error: "Failed to generate code from OpenAI" });
  }
});

module.exports = router;
