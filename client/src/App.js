import { useState } from "react";
import PromptForm from "./components/promptForm";
import CodeOutput from "./components/CodeOutput";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [aiCode, setAiCode] = useState("");
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [language, setLanguage] = useState("");

  const handlePromptSubmit = (prompt, lang) => {
    setCurrentPrompt(prompt);
    setLanguage(lang);

    // Simulated AI response (we'll replace this later with real OpenAI call)
    const simulatedCode =
      lang === "python"
        ? `def reverse_string(s):\n    return s[::-1]`
        : `function reverseString(str) {\n  return str.split("").reverse().join("");\n}`;

    setAiCode(simulatedCode);
  };

  const handleFeedbackSubmit = async (feedback) => {
    alert("Feedback submitted!\n\n" + feedback);
    // Later, this will send to backend!
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          CodePromptEval
        </h1>

        <PromptForm onSubmit={handlePromptSubmit} />
        {aiCode && <CodeOutput code={aiCode} />}
        {aiCode && <FeedbackForm onSubmit={handleFeedbackSubmit} />}
      </div>
    </div>
  );
}

export default App;
