const RecentInterviews = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      
      <h3 className="text-xl font-semibold mb-4">
        Recent Interviews
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <div>
            <p className="font-medium">Frontend Developer</p>
            <p className="text-slate-400 text-sm">Score: 78%</p>
          </div>
          <button className="text-blue-400 hover:underline text-sm">
            View Result
          </button>
        </div>

        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <div>
            <p className="font-medium">Java Interview</p>
            <p className="text-slate-400 text-sm">Score: 72%</p>
          </div>
          <button className="text-blue-400 hover:underline text-sm">
            View Result
          </button>
        </div>
      </div>

    </div>
  );
};

export default RecentInterviews;
