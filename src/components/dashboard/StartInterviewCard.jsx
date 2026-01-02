import { useNavigate } from "react-router-dom";

const StartInterviewCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between mb-10">
      
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Start a New Mock Interview
        </h2>
        <p className="text-blue-100">
          Practice with AI and get instant feedback.
        </p>
      </div>

      <button
        onClick={() => navigate("/setup")}
        className="mt-4 md:mt-0 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100"
      >
        🎤 Start Interview
      </button>
    </div>
  );
};

export default StartInterviewCard;
