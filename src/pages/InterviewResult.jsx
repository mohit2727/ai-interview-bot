import { useInterview } from "../context/InterviewContext";
import { scoreAnswer } from "../utils/AnswerScoring";
import { useNavigate } from "react-router-dom";

const InterviewResult = () => {
  const { history } = useInterview();
  const navigate = useNavigate();

  // Get latest interview result
  const result = history[history.length - 1];

  if (!result) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-slate-400">
        No interview result found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] px-4 py-10 flex justify-center">
      <div className="w-full max-w-5xl space-y-8">
        <h1 className="text-3xl font-bold text-white text-center">
          Interview Performance Report
        </h1>

        <h2 className="text-2xl font-bold text-white">
          Final Score: {result.score}%
        </h2>

        <p className="text-slate-400 mt-4">
          Feedback:
        </p>

        <ul className="mt-2 text-slate-300 list-disc pl-5 space-y-2">
          {result.answers.map((ans, idx) => {
            const res = scoreAnswer(ans);
            return <li key={idx}>{res.feedback}</li>;
          })}
        </ul>
      </div>
      <button
        onClick={() => navigate("/dashboard")}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        📂 Back to Dashboard
      </button>
    </div>
  );
};

export default InterviewResult;

