function CodeOutput({ code }) {
  return (
    <div className="bg-gray-800 text-green-200 p-4 mt-6 rounded font-mono text-sm whitespace-pre-wrap shadow-inner">
      <h3 className="text-lg mb-2 font-semibold text-white">Generated Code:</h3>
      <pre>{code}</pre>
    </div>
  );
}

export default CodeOutput;
