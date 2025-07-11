import { useState } from "react";

function FeedbackForm({ onSubmit }) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    onSubmit(feedback);
    setFeedback("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 mt-6 rounded shadow-md space-y-4"
    >
      <label className="block text-gray-700 font-medium mb-1">
        Your Feedback
      </label>
      <textarea
        className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-blue-500"
        rows="3"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Is the AI code correct? Suggestions?"
      ></textarea>

      <button
        type="submit"
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
      >
        Submit Feedback
      </button>
    </form>
  );
}

export default FeedbackForm;
