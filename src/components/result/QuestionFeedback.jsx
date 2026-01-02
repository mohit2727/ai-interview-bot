const QuestionFeedback = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-white font-semibold mb-4">
        Question-wise Feedback
      </h3>

      <div className="space-y-4">
        <div className="border border-slate-800 rounded-lg p-4">
          <p className="text-slate-300 text-sm">
            <span className="text-blue-400">Q1:</span> Explain REST vs SOAP
          </p>
          <p className="mt-2 text-slate-400 text-sm">
            Good explanation but include more real-world use cases.
          </p>
          <p className="mt-1 text-green-400 text-sm">Score: 7/10</p>
        </div>

        <div className="border border-slate-800 rounded-lg p-4">
          <p className="text-slate-300 text-sm">
            <span className="text-blue-400">Q2:</span> What is React state?
          </p>
          <p className="mt-2 text-slate-400 text-sm">
            Answer lacked clarity and examples.
          </p>
          <p className="mt-1 text-yellow-400 text-sm">Score: 6/10</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionFeedback;
