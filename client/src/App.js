import { useState } from "react";
import PromptForm from "./components/PromptForm";
import CodeOutput from "./components/CodeOutput";
import FeedbackForm from "./components/FeedbackForm";
import SnippetList from "./components/SnippetList";
import { toast } from "react-hot-toast";

function App() {
  const [aiCode, setAiCode] = useState("");
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [language, setLanguage] = useState("");

  const handlePromptSubmit = async (prompt, lang) => {
    if (!prompt.trim()) {
      toast.error("Please enter a valid prompt.");
      return;
    }

    setCurrentPrompt(prompt);
    setLanguage(lang);

    // Simulated AI response for now
    const simulatedCode =
      lang === "python"
        ? `def reverse_string(s):\n    return s[::-1]`
        : `function reverseString(str) {\n  return str.split("").reverse().join("");\n}`;

    setAiCode(simulatedCode);
    toast.success("✅ Code generated!");
  };

  const handleFeedbackSubmit = async (feedback) => {
    if (!feedback.trim()) {
      toast.error("Please write your feedback before submitting.");
      return;
    }

    const payload = {
      prompt: currentPrompt,
      language,
      aiCode,
      userFeedback: feedback,
    };

    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("✅ Feedback saved to NeonDB!");
      } else {
        const error = await response.json();
        toast.error("❌ Server error: " + error.error);
      }
    } catch (err) {
      console.error("❌ Submission failed:", err);
      toast.error("❌ Could not connect to backend.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-800 drop-shadow-sm">
            CodePromptEval
          </h1>
          <p className="text-gray-600 mt-2">
            Evaluate AI-generated code prompts with human feedback.
          </p>
        </div>

        <PromptForm onSubmit={handlePromptSubmit} />
        {aiCode && <CodeOutput code={aiCode} />}
        {aiCode && <FeedbackForm onSubmit={handleFeedbackSubmit} />}
        <SnippetList />
      </div>
    </div>
  );
}

export default App;
