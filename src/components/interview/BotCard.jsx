const BotCard = () => {
  return (
    <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-6 mb-6">
      
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl">
        🤖
      </div>

      {/* Bot Info */}
      <div>
        <h2 className="text-white font-semibold">AI Interviewer</h2>
        <p className="text-slate-400 text-sm">
          Asking your next question...
        </p>
      </div>

      {/* Status */}
      <div className="ml-auto text-green-400 text-sm">
        ● Speaking
      </div>
    </div>
  );
};

export default BotCard;
