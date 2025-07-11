const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// GET /api/snippets → Fetch all saved prompts
router.get("/snippets", async (req, res) => {
  console.log("📥 GET /api/snippets triggered");
  try {
    const snippets = await prisma.codeSnippet.findMany({
      orderBy: { createdAt: "desc" },
    });
    console.log("✅ Snippets fetched:", snippets);
    res.json(snippets);
  } catch (err) {
    console.error("❌ Failed to fetch snippets:", err.message);
    res.status(500).json({ error: "Failed to fetch snippets" });
  }
});

// ✅ POST /api/submit → Save a new prompt + code + feedback
router.post("/submit", async (req, res) => {
  const { prompt, language, aiCode, userFeedback } = req.body;

  if (!prompt || !language || !aiCode) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const saved = await prisma.codeSnippet.create({
      data: {
        prompt,
        language,
        aiCode,
        userFeedback,
      },
    });
    console.log("✅ Snippet saved:", saved);
    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Failed to save snippet:", err.message);
    res.status(500).json({ error: "Failed to save snippet" });
  }
});

module.exports = router;
