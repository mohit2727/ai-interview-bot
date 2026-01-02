const ScoreCard = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
      
      <div>
        <h2 className="text-white text-xl font-semibold">Overall Score</h2>
        <p className="text-slate-400 text-sm mt-1">
          Based on clarity, correctness, and confidence
        </p>
      </div>

      <div className="mt-6 md:mt-0 text-5xl font-bold text-green-400">
        78%
      </div>
    </div>
  );
};

export default ScoreCard;
