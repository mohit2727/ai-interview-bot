import AudioWave from "./AudioWave";

const MicControl = () => {
  return (
    <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center">

      {/* Wave */}
      <AudioWave />

      {/* Mic Button */}
      <button className="mt-6 w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-3xl flex items-center justify-center transition">
        🎤
      </button>

      <p className="mt-4 text-slate-400 text-sm">
        Click the mic and start speaking
      </p>
    </div>
  );
};

export default MicControl;
