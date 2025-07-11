import React, { useEffect, useState } from "react";

const SnippetList = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/snippets")
      .then((res) => res.json())
      .then((data) => setSnippets(data))
      .catch((err) => console.error("Failed to load snippets", err));
  }, []);

  return (
    <div className="mt-10 space-y-6">
      <h2 className="text-xl font-semibold text-center">📜 Saved Code Snippets</h2>
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
        >
          <p className="text-sm text-gray-500">🕒 {new Date(snippet.createdAt).toLocaleString()}</p>
          <p><strong>Prompt:</strong> {snippet.prompt}</p>
          <p><strong>Language:</strong> {snippet.language}</p>
          <pre className="bg-gray-100 text-sm p-2 my-2 rounded whitespace-pre-wrap">
            {snippet.aiCode}
          </pre>
          <p className="italic text-green-600">"{snippet.userFeedback}"</p>
        </div>
      ))}
    </div>
  );
};

export default SnippetList;