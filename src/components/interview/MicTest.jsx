const MicTest = () => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <h3 className="text-white font-semibold mb-2">Microphone Check</h3>
      <p className="text-slate-400 text-sm mb-4">
        Ensure your microphone is working properly before starting.
      </p>

      <div className="flex items-center justify-between">
        <span className="text-slate-300">Mic Status: <span className="text-green-400">Ready</span></span>
        <button className="border border-slate-600 text-slate-300 px-4 py-2 rounded-lg hover:bg-slate-700 transition">
          Test Mic
        </button>
      </div>
    </div>
  );
};

export default MicTest;
