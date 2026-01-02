const AudioWave = () => {
  return (
    <div className="flex gap-2 h-8">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="w-1 bg-blue-500 rounded-full animate-pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        ></div>
      ))}
    </div>
  );
};

export default AudioWave;
