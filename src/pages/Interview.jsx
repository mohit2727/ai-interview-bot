import BotCard from "../components/interview/BotCard";
import QuestionCard from "../components/interview/QuestionCard";
import InterviewTimer from "../components/interview/InterviewTimer";
import MicInput from "../components/interview/MicInput";

import { stopSpeaking } from "../utils/botSpeech";
import { scoreAnswer } from "../utils/AnswerScoring";

import { useInterview } from "../context/InterviewContext";
import { useNavigate } from "react-router-dom";

const Interview = () => {
  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    setAnswers,
    saveInterviewToHistory,
  } = useInterview();

  const navigate = useNavigate();

  // 🎯 Called when mic finishes listening
 const handleVoiceAnswer = (text) => {
  setAnswers((prev) => [...prev, text]);

  setCurrentQuestionIndex((prevIndex) => {
    const nextIndex = prevIndex + 1;

    if (nextIndex < questions.length) {
      return nextIndex;
    } else {
  const totalScore = answers.reduce((acc, ans) => {
    const result = scoreAnswer(ans);
    return acc + result.score;
  }, 0);

  const finalScore = Math.round(totalScore / answers.length);

  saveInterviewToHistory({
    score: finalScore,
    answers,
  });

  stopSpeaking();
  navigate("/result");

    };
  });
};

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center px-4 py-6">

      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <h1 className="text-white text-xl font-semibold">
          Live Interview Session
        </h1>
        <InterviewTimer />
      </div>

      {/* Bot */}
      <BotCard />

      {/* Question */}
      <QuestionCard />

      {/* 🎙 Mic Input */}
      <div className="mt-10">
        <MicInput onResult={handleVoiceAnswer} />
      </div>

      {/* Emergency Exit (optional) */}
      <button
        onClick={() => navigate("/result")}
        className="text-slate-400 underline mt-6"
      >
        End Interview
      </button>
    </div>
  );
};

export default Interview;

