import MicTest from "../components/interview/MicTest";
import { useNavigate } from "react-router-dom";
import { useInterview } from "../context/InterviewContext";

const InterviewSetup = () => {
  const navigate = useNavigate();
  const {setQuestions, setCurrentQuestionIndex, setAnswers} = useInterview();

  const startInterview = () => {
    setQuestions([
      // "Mayank Pagal he, And also Mayank is stupid. He is idiot. Just Kidding! Nandaa hahaha",
      "Tell me about yourself.",
      "What is React and why is it used?",
      "Explain the difference between props and state.",
      "What are React hooks?",
      "Explain useEffect with an example.",
    ])

    setCurrentQuestionIndex(0);
    setAnswers([]);

    navigate("/interview");
  }
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl p-8">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-white text-center">
          Set Up Your Interview
        </h1>
        <p className="mt-2 text-slate-400 text-center">
          Configure your interview before starting the session
        </p>

        {/* Form */}
        <div className="mt-10 space-y-6">

          {/* Role */}
          <div>
            <label className="text-slate-300 text-sm">Job Role</label>
            <select className="mt-2 w-full bg-slate-800 text-white p-3 rounded-lg outline-none border border-slate-700 focus:border-blue-500">
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
              <option>Java Developer</option>
              <option>HR Interview</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label className="text-slate-300 text-sm">Experience Level</label>
            <select className="mt-2 w-full bg-slate-800 text-white p-3 rounded-lg outline-none border border-slate-700 focus:border-blue-500">
              <option>Fresher (0–1 years)</option>
              <option>Mid-Level (2–4 years)</option>
              <option>Senior (5+ years)</option>
            </select>
          </div>

          {/* Interview Type */}
          <div>
            <label className="text-slate-300 text-sm">Interview Type</label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Technical", "HR", "Mixed"].map(type => (
                <button
                  key={type}
                  className="border border-slate-700 rounded-lg py-3 text-slate-300 hover:border-blue-500 hover:text-white transition"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <label className="text-slate-300 text-sm">Difficulty Level</label>
            <select className="mt-2 w-full bg-slate-800 text-white p-3 rounded-lg outline-none border border-slate-700 focus:border-blue-500">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="text-slate-300 text-sm">Interview Duration</label>
            <select className="mt-2 w-full bg-slate-800 text-white p-3 rounded-lg outline-none border border-slate-700 focus:border-blue-500">
              <option>10 Minutes</option>
              <option>20 Minutes</option>
              <option>30 Minutes</option>
            </select>
          </div>

          {/* Mic Test */}
          <MicTest />

          {/* Start Button */}
          <button 
          // onClick= {startInterview}
          onClick={startInterview}
           className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition">
            🎤 Start Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewSetup;
