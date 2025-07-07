import { useState } from "react";

function FeedbackForm({ onSubmit }) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      alert("Feedback cannot be empty.");
      return;
    }
    onSubmit(feedback);
    setFeedback("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <label className="block font-medium text-gray-700">Your Feedback:</label>
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        rows="3"
        placeholder="e.g., The code is correct but lacks error handling."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Submit Feedback
      </button>
    </form>
  );
}

export default FeedbackForm;
