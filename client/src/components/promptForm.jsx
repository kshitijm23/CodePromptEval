import { useState } from "react";

function PromptForm({ onSubmit }) {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("python");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) {
      alert("Please enter a prompt.");
      return;
    }
    onSubmit(prompt, language);
    setPrompt(""); // reset after submit
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      <label className="block font-medium text-gray-700">Your Prompt:</label>
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        rows="4"
        placeholder="e.g., Write a Python function to reverse a string"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <label className="block font-medium text-gray-700">Language:</label>
      <select
        className="p-2 border border-gray-300 rounded"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate Code
      </button>
    </form>
  );
}

export default PromptForm;
