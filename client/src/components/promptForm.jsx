import { useState } from "react";

function PromptForm({ onSubmit }) {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("python");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onSubmit(prompt, language);
    setPrompt("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md space-y-4"
    >
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Prompt
        </label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-blue-500"
          rows="4"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="What would you like the AI to do?"
        ></textarea>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Language
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
        >
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Generate Code
      </button>
    </form>
  );
}

export default PromptForm;
