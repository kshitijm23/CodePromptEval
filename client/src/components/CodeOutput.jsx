function CodeOutput({ code }) {
  return (
    <div className="bg-gray-900 text-green-300 p-4 rounded shadow overflow-x-auto whitespace-pre-wrap font-mono mt-6">
      <h2 className="text-white mb-2 text-lg">Generated Code:</h2>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default CodeOutput;
