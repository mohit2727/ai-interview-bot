const StrengthWeakness = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Strengths */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-green-400 font-semibold mb-4">Strengths</h3>
        <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
          <li>Clear explanation of concepts</li>
          <li>Good confidence while speaking</li>
          <li>Relevant examples used</li>
        </ul>
      </div>

      {/* Weaknesses */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-red-400 font-semibold mb-4">Areas to Improve</h3>
        <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
          <li>Depth in technical answers</li>
          <li>Handling follow-up questions</li>
          <li>Structured responses</li>
        </ul>
      </div>

    </div>
  );
};

export default StrengthWeakness;
